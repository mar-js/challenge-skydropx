import styled from '@emotion/styled'

import { TableRow } from '@mui/material'

export const TableRowCustom = styled(TableRow)`
  cursor: pointer;

  &:hover {
    background-color: #666666;

    td {
      color: #ffffff !important;
    }
  }
`
