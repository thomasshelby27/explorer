import {
  TransactionAction,
  TransactionCategory,
  TransactionMapping,
} from '../types'

import { Description } from './Description'
import { parser } from './parser'
import { Simple } from './Simple'
import { TableDetail } from './TableDetail'

export const AccountSetTransaction: TransactionMapping = {
  Description,
  Simple,
  TableDetail,
  action: TransactionAction.MODIFY,
  category: TransactionCategory.ACCOUNT,
  parser,
}
