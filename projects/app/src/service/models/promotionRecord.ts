import { connectionMongo, type Model } from '@fastgpt/service/common/mongo';
const { Schema, model, models } = connectionMongo;
import { PromotionRecordSchema as PromotionRecordType } from '@/types/mongoSchema';

const PromotionRecordSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  objUId: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: false
  },
  createTime: {
    type: Date,
    default: () => new Date()
  },
  type: {
    type: String,
    required: true,
    enum: ['pay', 'register']
  },
  amount: {
    type: Number,
    required: true
  }
});

export const promotionRecord: Model<PromotionRecordType> =
  models['promotionRecord'] || model('promotionRecord', PromotionRecordSchema);
