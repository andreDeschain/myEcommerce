import { Field, ID, InputType, PickType } from '@nestjs/graphql';
import { BalanceInput, Shop } from '../entities/shop.entity';

@InputType()
export class TransferShopOwnershipInput extends PickType(Shop, [
  'name',
  'slug',
  'address',
  'description',
  'cover_image',
  'logo',
  'settings',
]) {
  @Field(() => [ID], { nullable: true })
  categories?: number[];
  @Field(() => BalanceInput, { nullable: true })
  balance?: BalanceInput;
}

@InputType()
export class ApproveShopInput {
  @Field(() => ID)
  id?: number;
  admin_commission_rate?: number;
}