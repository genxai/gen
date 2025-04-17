import { betterAuth } from "better-auth";
import "dotenv/config";
import * as crypto from "node:crypto";
import { jwt } from "better-auth/plugins";
// TODO: fix types
import Database from "better-sqlite3";
import { jazzPlugin } from "jazz-betterauth-server-plugin";

export const clientOrigin =
	process.env.CLIENT_ORIGIN || "http://localhost:3000";
const generatedKeys = crypto.generateKeyPairSync("ed25519");
export const privateKey = process.env.PRIVATE_KEY
	? crypto.createPrivateKey(
			Buffer.from(process.env.PRIVATE_KEY, "base64")
				.toString("utf-8")
				.replace(/\\n/gm, "\n"),
		)
	: generatedKeys.privateKey;

const publicKey = process.env.PUBLIC_KEY
	? crypto.createPublicKey(
			Buffer.from(process.env.PUBLIC_KEY, "base64")
				.toString("utf-8")
				.replace(/\\n/gm, "\n"),
		)
	: generatedKeys.publicKey;

export const auth = betterAuth({
	database: new Database(`./sqlite.db`),
	trustedOrigins: [clientOrigin],
	emailAndPassword: {
		enabled: true,
	},
	plugins: [
		jwt(),
		jazzPlugin(
			publicKey.export({
				type: "spki",
				format: "pem",
			}) as string,
		),
	],
	user: {
		deleteUser: {
			enabled: true,
		},
		additionalFields: {
			encryptedCredentials: {
				type: "string",
				required: false,
			},
			salt: {
				type: "string",
				required: false,
			},
		},
	},
});
