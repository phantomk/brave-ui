/* This Source Code Form is subject to the terms of the Mozilla Public
* License, v. 2.0. If a copy of the MPL was not distributed with this file,
* You can obtain one at http://mozilla.org/MPL/2.0/.
*/

import styled from 'styled-components'

export const StyledWrapper = styled<{}, 'div'>('div')`
  font-family: Poppins, sans-serif;
  padding-top: 10px;
`

export const StyledLink = styled<{}, 'a'>('a')`
  cursor: pointer;
  display: inline-block;
  color: #696FDC;
  font-size: 16px;
  letter-spacing: 0;
`

export const StyledDisabledLink = styled<{}, 'span'>('span')`
  display: inline-block;
  color: #CED0DB;
  font-size: 16px;
  letter-spacing: 0;
`

export const StyledText = styled<{}, 'span'>('span')`
  font-size: 16px;
  letter-spacing: 0;
  display: inline-block;
  color: #C2C4CF
`

export const StyledAdsHistoryTitle = styled<{}, 'div'>('div')`
  font-size: 22px;
  font-weight: 600;
  color: rgb(193, 45, 124);
  margin-bottom: 10px;
  line-height: 1.3;
`

export const StyledNote = styled<{}, 'div'>('div')`
  max-width: 508px;
  font-family: Muli,sans-serif;
  font-size: 12px;
  font-weight: 300;
  margin-bottom: 10px;
  line-height: 1.5;
  color: #686978;
`

export const StyledSeparatorText = styled<{}, 'span'>('span')`
  font-size: 16px;
  font-weight: 200;
  letter-spacing: 0;
  display: inline-block;
  color: #C2C4CF
`

export const StyledSubTitleText = styled<{}, 'div'>('div')`
  font-size: 30px;
  line-height: 1.2;
  margin-bottom: 10px;
  font-weight: 300;
`

export const StyledAdsInfoText = styled<{}, 'span'>('span')`
  font-size: 18px;
  color: rgb(193, 45, 124);
`

export const StyledAdsInfoTextWrapper = styled<{}, 'div'>('div')`
  line-height: 1.5;
`

export const StyledAdsPerHourText = styled<{}, 'span'>('span')`
  font-size: 18px;
  color: rgb(193, 45, 124);
  font-weight: 600;
`

export const StyledAdsHeaderWrapper = styled<{}, 'div'>('div')`
  line-height: 1.5;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const StyledAdsSaveFiltered = styled<{}, 'div'>('div')`
  width: 10%;
  text-align: right;
  line-height: 1.5;
  display: flex;
  justify-content: space-between;
`
