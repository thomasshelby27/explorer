import {
  TransactionAction,
  TransactionCategory,
  TransactionMapping,
} from '../types'

import { Description } from './Description'
import { Simple } from './Simple'
import { parser } from './parser'
import { TableDetail } from './TableDetail'

export const OfferCancelTransaction: TransactionMapping = {
  Description,
  Simple,
  TableDetail,
  action: TransactionAction.CANCEL,
  category: TransactionCategory.DEX,
  parser,
}
