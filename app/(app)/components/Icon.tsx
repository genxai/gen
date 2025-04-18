import { SiDiscord } from "@icons-pack/react-simple-icons"
import { clsx } from "clsx"
import {
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpRightIcon,
  BookTextIcon,
  BoxIcon,
  CheckIcon,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  CodeIcon,
  CopyIcon,
  DrumIcon,
  FileLock2Icon,
  FileTextIcon,
  FingerprintIcon,
  FolderArchiveIcon,
  FolderCodeIcon,
  GaugeIcon,
  GlobeIcon,
  HouseIcon,
  ImageIcon,
  InfoIcon,
  LinkIcon,
  LockKeyholeIcon,
  LogOutIcon,
  type LucideIcon,
  MailCheckIcon,
  MailIcon,
  MailQuestionIcon,
  MenuIcon,
  MessageCircleQuestionIcon,
  MonitorSmartphoneIcon,
  MoonIcon,
  MousePointerSquareDashedIcon,
  PencilLineIcon,
  PlusIcon,
  ScanFace,
  SearchCodeIcon,
  SettingsIcon,
  SunIcon,
  TrashIcon,
  UploadCloudIcon,
  UserIcon,
  UserPlusIcon,
  UsersIcon,
  WifiOffIcon,
  XIcon,
  PaperclipIcon,
} from "lucide-react"

const icons = {
  add: PlusIcon,
  addUser: UserPlusIcon,
  arrowDown: ArrowDownIcon,
  arrowRight: ArrowRightIcon,
  auth: UserIcon,
  browser: GlobeIcon,
  check: CheckIcon,
  chevronRight: ChevronRight,
  chevronDown: ChevronDown,
  chevronUp: ChevronUp,
  close: XIcon,
  code: CodeIcon,
  copy: CopyIcon,
  darkTheme: MoonIcon,
  delete: TrashIcon,
  devices: MonitorSmartphoneIcon,
  discord: SiDiscord,
  docs: BookTextIcon,
  drum: DrumIcon,
  encryption: LockKeyholeIcon,
  externalLink: ArrowUpRightIcon,
  faceId: ScanFace,
  file: FileTextIcon,
  home: HouseIcon,
  help: MessageCircleQuestionIcon,
  image: ImageIcon,
  inspector: SearchCodeIcon,
  instant: GaugeIcon,
  lightTheme: SunIcon,
  link: LinkIcon,
  menu: MenuIcon,
  newsletter: MailIcon,
  emailVerified: MailCheckIcon,
  emailNeedsVerification: MailQuestionIcon,
  offline: WifiOffIcon,
  package: BoxIcon,
  permissions: FileLock2Icon,
  project: FolderCodeIcon,
  signOut: LogOutIcon,
  settings: SettingsIcon,
  social: UsersIcon,
  spatialPresence: MousePointerSquareDashedIcon,
  touchId: FingerprintIcon,
  upload: UploadCloudIcon,
  organization: UsersIcon,
  write: PencilLineIcon,
  zip: FolderArchiveIcon,
  info: InfoIcon,
  left: ArrowLeftIcon,
  right: ArrowRightIcon,
  paperclip: PaperclipIcon,
}

// copied from tailwind line height https://tailwindcss.com/docs/font-size
const sizes = {
  xs: 16,
  sm: 20,
  md: 24,
  lg: 28,
  xl: 28,
  "2xl": 32,
  "3xl": 36,
  "4xl": 40,
  "5xl": 48,
  "6xl": 60,
  "7xl": 72,
  "8xl": 96,
  "9xl": 128,
}

const strokeWidths = {
  xs: 2.5,
  sm: 2.5,
  md: 1.5,
  lg: 1.5,
  xl: 1.5,
  "2xl": 1.25,
  "3xl": 1.25,
  "4xl": 1.25,
  "5xl": 1,
  "6xl": 1,
  "7xl": 1,
  "8xl": 1,
  "9xl": 1,
}

export function Icon({
  name,
  icon,
  size = "md",
  className,
  rounded,
  ...svgProps
}: {
  name?: string
  icon?: LucideIcon
  size?: keyof typeof sizes
  className?: string
  rounded?: boolean
} & React.SVGProps<SVGSVGElement>) {
  if (!icon && (!name || !icons.hasOwnProperty(name))) {
    throw new Error(`Icon not found`)
  }

  // @ts-ignore
  const IconComponent = icons?.hasOwnProperty(name) ? icons[name] : icon

  return (
    <IconComponent
      aria-hidden="true"
      size={sizes[size]}
      strokeWidth={strokeWidths[size]}
      className={clsx(className, {
        "p-1 rounded-full": rounded,
      })}
      {...svgProps}
    />
  )
}
