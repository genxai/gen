import type { AddQuery, CountQuery, GetQuery, RemoveQuery, SetQuery } from "@ronin/compiler";
import type { DeepCallable, ResultRecord } from "@ronin/syntax/queries";
import type { QueryHandlerOptions } from "ronin/types";
import type { StoredObject } from "@ronin/compiler";
type ResolveSchema<TSchema, TUsing extends Array<string> | "all", TKey extends string> = TUsing extends "all" ? TSchema : TKey extends TUsing[number] ? TSchema : TSchema extends Array<unknown> ? Array<string> : string;
declare module "ronin" {
    export type Global = ResultRecord & {
        generalMaintenanceMessage: string;
    };
    export type Globals = Array<Global> & {
        moreBefore?: string;
        moreAfter?: string;
    };
    export type User = ResultRecord & {
        admin: boolean;
        codeGenerationsUnlimitedUntil: Date;
        email: string;
        imageGenerationsUnlimitedUntil: Date;
        name: string;
        token: string;
        tokenCreatedAt: Date;
        tokens: number;
    };
    export type Users = Array<User> & {
        moreBefore?: string;
        moreAfter?: string;
    };
    export type Order<TUsing extends Array<"fromUser"> | "all" = [
    ]> = ResultRecord & {
        costInUsdCents: number;
        fromUser: ResolveSchema<User, TUsing, "fromUser">;
        paidAt: Date;
        paymentProvider: string;
        paymentProviderOrderId: string;
        paymentStatus: string;
        whatIsBought: string;
    };
    export type Orders<TUsing extends Array<"fromUser"> | "all" = [
    ]> = Array<Order<TUsing>> & {
        moreBefore?: string;
        moreAfter?: string;
    };
    export type ImageGeneration<TUsing extends Array<"createdByUser"> | "all" = [
    ]> = ResultRecord & {
        createdByUser: ResolveSchema<User, TUsing, "createdByUser">;
        generatedContent: StoredObject;
        modelUsed: string;
        prompt: string;
        status: string;
    };
    export type ImageGenerations<TUsing extends Array<"createdByUser"> | "all" = [
    ]> = Array<ImageGeneration<TUsing>> & {
        moreBefore?: string;
        moreAfter?: string;
    };
    declare const add: {
        /* Add a single Global record */
        global: DeepCallable<AddQuery[keyof AddQuery], Global | null>;
        /* Add a single User record */
        user: DeepCallable<AddQuery[keyof AddQuery], User | null>;
        /* Add a single Order record */
        order: DeepCallable<AddQuery[keyof AddQuery], Order | null>;
        /* Add a single Image Generation record */
        imageGeneration: DeepCallable<AddQuery[keyof AddQuery], ImageGeneration | null>;
    };
    declare const count: {
        /* Count multiple Global records */
        globals: DeepCallable<CountQuery[keyof CountQuery], number>;
        /* Count multiple User records */
        users: DeepCallable<CountQuery[keyof CountQuery], number>;
        /* Count multiple Order records */
        orders: DeepCallable<CountQuery[keyof CountQuery], number>;
        /* Count multiple Image Generation records */
        imageGenerations: DeepCallable<CountQuery[keyof CountQuery], number>;
    };
    declare const get: {
        /* Get a single Global record */
        global: DeepCallable<GetQuery[keyof GetQuery], Global | null>;
        /* Get multiple Global records */
        globals: DeepCallable<GetQuery[keyof GetQuery], Globals>;
        /* Get a single User record */
        user: DeepCallable<GetQuery[keyof GetQuery], User | null>;
        /* Get multiple User records */
        users: DeepCallable<GetQuery[keyof GetQuery], Users>;
        /* Get a single Order record */
        order: DeepCallable<GetQuery[keyof GetQuery], Order | null>;
        /* Get multiple Order records */
        orders: DeepCallable<GetQuery[keyof GetQuery], Orders>;
        /* Get a single Image Generation record */
        imageGeneration: DeepCallable<GetQuery[keyof GetQuery], ImageGeneration | null>;
        /* Get multiple Image Generation records */
        imageGenerations: DeepCallable<GetQuery[keyof GetQuery], ImageGenerations>;
        /* Get all current models */
        models: DeepCallable<GetQuery[keyof GetQuery], Models>;
    };
    declare const remove: {
        /* Remove a single Global record */
        global: DeepCallable<RemoveQuery[keyof RemoveQuery], Global | null>;
        /* Remove multiple Global records */
        globals: DeepCallable<RemoveQuery[keyof RemoveQuery], Globals>;
        /* Remove a single User record */
        user: DeepCallable<RemoveQuery[keyof RemoveQuery], User | null>;
        /* Remove multiple User records */
        users: DeepCallable<RemoveQuery[keyof RemoveQuery], Users>;
        /* Remove a single Order record */
        order: DeepCallable<RemoveQuery[keyof RemoveQuery], Order | null>;
        /* Remove multiple Order records */
        orders: DeepCallable<RemoveQuery[keyof RemoveQuery], Orders>;
        /* Remove a single Image Generation record */
        imageGeneration: DeepCallable<RemoveQuery[keyof RemoveQuery], ImageGeneration | null>;
        /* Remove multiple Image Generation records */
        imageGenerations: DeepCallable<RemoveQuery[keyof RemoveQuery], ImageGenerations>;
    };
    declare const set: {
        /* Set a single Global record */
        global: DeepCallable<SetQuery[keyof SetQuery], Global | null>;
        /* Set multiple Global records */
        globals: DeepCallable<SetQuery[keyof SetQuery], Globals>;
        /* Set a single User record */
        user: DeepCallable<SetQuery[keyof SetQuery], User | null>;
        /* Set multiple User records */
        users: DeepCallable<SetQuery[keyof SetQuery], Users>;
        /* Set a single Order record */
        order: DeepCallable<SetQuery[keyof SetQuery], Order | null>;
        /* Set multiple Order records */
        orders: DeepCallable<SetQuery[keyof SetQuery], Orders>;
        /* Set a single Image Generation record */
        imageGeneration: DeepCallable<SetQuery[keyof SetQuery], ImageGeneration | null>;
        /* Set multiple Image Generation records */
        imageGenerations: DeepCallable<SetQuery[keyof SetQuery], ImageGenerations>;
    };
    declare const createSyntaxFactory: (options: QueryHandlerOptions | (() => QueryHandlerOptions)) => {
        add: typeof add;
        count: typeof count;
        get: typeof get;
        remove: typeof remove;
        set: typeof set;
        alter: typeof alter;
        batch: typeof batch;
        create: typeof create;
        drop: typeof drop;
        sql: typeof sql;
        sqlBatch: typeof sqlBatch;
    };
    export default function (options: QueryHandlerOptions | (() => QueryHandlerOptions)): {
        add: typeof add;
        count: typeof count;
        get: typeof get;
        remove: typeof remove;
        set: typeof set;
        alter: typeof alter;
        batch: typeof batch;
        create: typeof create;
        drop: typeof drop;
        sql: typeof sql;
        sqlBatch: typeof sqlBatch;
    };
}
