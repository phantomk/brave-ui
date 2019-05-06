/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import {
  StyledAdsHeaderWrapper,
  StyledAdsHistoryTitle,
  StyledAdsInfoText,
  StyledAdsInfoTextWrapper,
  StyledAdsPerHourText,
  StyledAdsSaveFiltered,
  StyledDisabledLink,
  StyledLink,
  StyledSeparatorText,
  StyledSubTitleText,
  StyledText,
  StyledWrapper
} from './style'
import Modal from '../../../components/popupModals/modal/index'
import { getLocale } from '../../../helpers'
import TableAdsHistory, { DetailRow } from '../tableAdsHistory/index'

export interface Props {
  rows?: DetailRow[]
  onClose?: () => void
  id?: string
  isMobile?: boolean
  adsPerHour?: number
  adsPerDay?: number
  savedCount?: number
}

export default class ModalShowAdsHistory extends React.PureComponent<Props, {}> {
  get headers () {
    return [
      getLocale('date'),
      getLocale('ads'),
      getLocale('category')
    ]
  }

  render () {
    const { id, onClose, isMobile, adsPerHour, savedCount, rows } = this.props

    return (
      <Modal id={id} onClose={onClose} isMobile={isMobile}>
        <StyledWrapper>
          <StyledAdsHistoryTitle>
            {getLocale('adsHistoryTitle')}
          </StyledAdsHistoryTitle>
          <StyledSubTitleText>
            {getLocale('adsHistorySubTitle')}
          </StyledSubTitleText>
          <StyledAdsHeaderWrapper>
            <StyledAdsInfoTextWrapper>
              <StyledAdsInfoText>
                {getLocale('adsCurrentlyViewing')}
              </StyledAdsInfoText>
              <StyledAdsPerHourText>
                {(adsPerHour || '0') + (adsPerHour !== 1 ? getLocale('adsPerHourPlural') : getLocale('adsPerHourSingular'))}
              </StyledAdsPerHourText>
            </StyledAdsInfoTextWrapper>
              {
                rows ?
                  <StyledAdsSaveFiltered>
                    <StyledText>
                      <StyledLink>
                        {
                          getLocale('all')
                        }
                      </StyledLink>
                    </StyledText>
                    <StyledSeparatorText>|</StyledSeparatorText>
                    <StyledText>
                      {
                        savedCount && savedCount !== 0 ?
                          <StyledLink>
                            {
                              getLocale('saved')
                            }
                            </StyledLink> :
                          <StyledDisabledLink>
                            {
                              getLocale('saved')
                            }
                          </StyledDisabledLink>
                      }
                    </StyledText>
                  </StyledAdsSaveFiltered>
                : null
              }
          </StyledAdsHeaderWrapper>
          <TableAdsHistory
            rows={rows}
            allItems={true}
            header={this.headers}
          />
        </StyledWrapper>
      </Modal>
    )
  }
}
