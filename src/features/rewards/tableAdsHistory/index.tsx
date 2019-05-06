/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import {
  StyledTHFirst,
  StyledTHOther,
  StyledTHLast,
  StyledAdContentDiv,
  StyledLogoDiv,
  StyledAdInfoDiv,
  StyledAdBrand,
  StyledAdInfo,
  StyledAdStatDiv,
  StyledAdStat,
  StyledAdStatActions,
  StyledCategoryContentDiv,
  StyledCategoryName,
  StyledCategoryActions,
  StyledAdLink,
  StyledNoAdHistoryDiv
} from './style'
import { Row } from '../../../components/dataTables/table'
import { StyledTable } from '../../../components/dataTables/table/style'
import { StyledLogo } from '../modalAddFunds/style'
import ThumbLikePicker from '../thumbLikePicker'
import CategoryLikePicker from '../categoryLikePicker'
import DropMenu from '../dropMenu'
import AdRowsDetails from '../adRowsDetails'
import { getLocale } from '../../../helpers'

export interface DetailRow {
  [key: string]: any
  id: number
  date: string
  adDetailRows: AdDetailRow[]
}

interface AdContent {
  brand: string
  brandInfo: string
  brandLogo: string
  brandDisplayUrl: string
  brandUrl: string
  likeAction: number
  adAction: 'Viewed' | 'Clicked' | 'Closed' | 'Landed'
  onThumbUpPress?: () => void
  onThumbDownPress?: () => void
  menuOpen?: boolean
}

interface CategoryContent {
  category: string
  optAction: number
  onOptInAction?: () => void
  onOptOutAction?: () => void
}

export interface AdDetailRow {
  id: number
  adContent: AdContent
  categoryContent: CategoryContent
}

export interface Props {
  header: string[]
  id?: string
  testId?: string
  children?: React.ReactNode
  headerColor?: boolean
  rows?: DetailRow[]
  allItems?: boolean
}

export default class TableAdsHistory extends React.PureComponent<Props, {}> {
  getAdsHistoryTable = (header: string[], rows: DetailRow[]): any => {
    return (
      <StyledTable>
        {
          header ?
            <thead>
              <tr>
                {
                  this.getHeader(header)
                }
              </tr>
            </thead>
          : null
        }
        <tbody>
          {
            this.getRows(rows)
          }
        </tbody>
      </StyledTable>
    )
  }

  getHeader = (header: string[]) => {
    if (!header) {
      return
    }

    return (
      <>
        <StyledTHFirst>{header[0]}</StyledTHFirst>
        <StyledTHOther>{header[1]}</StyledTHOther>
        <StyledTHLast>{header[2]}</StyledTHLast>
      </>
    )
  }

  getRows = (rows: DetailRow[]) => {

    return rows.map((row: DetailRow, i: number) => {
      const detailRows = this.getDetailRows(row.adDetailRows)
      return (
          <AdRowsDetails key={i} row={row} rowIndex={i} detailRows={detailRows} />
      )
    })
  }

  getCategoryContent = (content: CategoryContent) => {
    return (
      <StyledCategoryContentDiv>
        <StyledCategoryName>
          {content.category}
        </StyledCategoryName>
        <StyledCategoryActions>
          <CategoryLikePicker optAction={content.optAction} />
        </StyledCategoryActions>
      </StyledCategoryContentDiv>
    )
  }

  getAdContent = (content: AdContent, i: number) => {
    return (
      <StyledAdContentDiv>
        <StyledAdLink href={content.brandUrl} target={'_blank'}>
          <StyledLogoDiv>
            <StyledLogo />
          </StyledLogoDiv>
          <StyledAdInfoDiv>
            <StyledAdBrand>{content.brand}</StyledAdBrand>
            <StyledAdInfo>{content.brandInfo}</StyledAdInfo>
            <StyledAdInfo>{content.brandDisplayUrl}</StyledAdInfo>
          </StyledAdInfoDiv>
        </StyledAdLink>
        <StyledAdStatDiv>
          <StyledAdStat>
            {content.adAction}
          </StyledAdStat>
          <div />
          <StyledAdStatActions>
            <ThumbLikePicker likeAction={content.likeAction} />
            <DropMenu />
          </StyledAdStatActions>
        </StyledAdStatDiv>
      </StyledAdContentDiv>
    )
  }

  getDetailRows = (rows: AdDetailRow[]): Row[] | undefined => {
    if (!rows) {
      return
    }

    return rows.map((row: AdDetailRow, i: number): Row => {
      const cell: Row = {
        content: [
          {
            content: (
              <td key={i} />
            ),
            customStyle: {
              width: '15% !important',
              border: 'none'
            }
          },
          {
            content: (
              this.getAdContent(row.adContent, i)
            ),
            customStyle: {
              width: '70% !important',
              border: '1px solid',
              'border-collapse': 'separate',
              'border-radius': '5px',
              padding: '10px'
            }
          },
          {
            content: (
              this.getCategoryContent(row.categoryContent)
            )
          }
        ],
        customStyle: {
          width: '100%',
          padding: '5px',
          border: 'none'
        }
      }
      return cell
    })
  }

  render () {
    const { id, testId, header, rows } = this.props
    return (
      <div id={id} data-test-id={testId} key={id}>
      {
        rows ?
          this.getAdsHistoryTable(header, rows)
          :
          <StyledNoAdHistoryDiv>
            {
              getLocale('noAdsHistory')
            }
          </StyledNoAdHistoryDiv>
      }
      </div>

    )
  }
}
