import { RawCoID } from "cojson"
import { Account, CoList, CoMap, Group, Profile, co } from "jazz-tools"

export class GlobalContainer extends CoList.Of(co.json<RawCoID>()) {}

// currently considers `1 shot only` use case
// TODO: make it work in a chat like setting ala v0, lovable
export class CodeGeneration extends CoMap {
  prompt = co.string
  modelUsed = co.string
  status = co.boolean
  generatedCode = co.optional.string
}
export const CodeGenerationCollection = CoList.Of(co.ref(CodeGeneration))

export class ImageGeneration extends CoMap {
  prompt = co.string
  modelUsed = co.string
  status = co.boolean
  generatedContentUrl = co.optional.string // object store url, not sure what is blob type in jazz
}
export const ImageGenerationCollection = CoList.Of(co.ref(ImageGeneration))

export class AccountRoot extends CoMap {
  imageGenerations = co.ref(ImageGenerationCollection)
  codeGenerations = co.ref(CodeGenerationCollection)
  tokens = co.number // used for image and code generations
  version = co.optional.number
}

export class UserProfile extends Profile {
  name = co.string
  static validate(data: { name?: string; other?: Record<string, unknown> }) {
    const errors: string[] = []
    if (!data.name?.trim()) {
      errors.push("Please enter a name")
    }
    return { errors }
  }
}

export class JazzAccount extends Account {
  profile = co.ref(UserProfile)
  root = co.ref(AccountRoot)
  async migrate(creationProps?: {
    name: string
    other?: Record<string, unknown>
  }) {
    if (this.root === undefined && creationProps) {
      await this.initialMigration(creationProps)
      return
    }
  }
  private async initialMigration(creationProps: {
    name: string
    other?: Record<string, unknown>
  }) {
    const { name, other } = creationProps
    const profileErrors = UserProfile.validate({ name, ...other })
    if (profileErrors.errors.length > 0) {
      throw new Error(
        `Invalid profile data: ${profileErrors.errors.join(", ")}`
      )
    }
    const publicGroup = Group.create({ owner: this })
    publicGroup.addMember("everyone", "reader")
    this.profile = UserProfile.create(
      { name, ...other },
      { owner: publicGroup }
    )
    const privateGroup = Group.create({ owner: this })
    this.root = AccountRoot.create(
      {
        tokens: 0,
        codeGenerations: CodeGenerationCollection.create([], {
          owner: publicGroup,
        }),
        imageGenerations: ImageGenerationCollection.create([], {
          owner: publicGroup,
        }),
        version: 0,
      },
      { owner: privateGroup }
    )
  }
}
