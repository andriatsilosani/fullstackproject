import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Authpayload{
    @Field()
    id: number;
    @Field()
    name: string;
    @Field({nullable: true})
    avatar: string;
    @Field()
    accessToken: string
}