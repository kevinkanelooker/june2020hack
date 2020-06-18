import React from 'react'
import ContentLoader from 'react-content-loader'

export const Column = (showTitle) => (
  <ContentLoader {...configuration(showTitle)}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M28 12.5C26.067 12.5 24.5 14.067 24.5 16V52.5H16C14.067 52.5 12.5 54.067 12.5 56V86C12.5 87.933 14.067 89.5 16 89.5H84C85.933 89.5 87.5 87.933 87.5 86V58.4167C87.5 56.4837 85.933 54.9167 84 54.9167H75.5V24.6071C75.5 22.6742 73.933 21.1071 72 21.1071H62C60.067 21.1071 58.5 22.6742 58.5 24.6071V35.5H51C49.067 35.5 47.5 37.067 47.5 39V41.5H40.5V16C40.5 14.067 38.933 12.5 37 12.5H28ZM47.5 46.5H40.5V84.5H47.5V46.5ZM63.5 84.5H70.5V26.1071H63.5V84.5ZM58.5 40.5H52.5V84.5H58.5V40.5ZM29.5 84.5V17.5H35.5V84.5H29.5ZM17.5 57.5H24.5V84.5H17.5V57.5ZM82.5 84.5H75.5V59.9167H82.5V84.5Z"
    />
  </ContentLoader>
)

const configuration = () => {
  return {
    animate:false,
    preserveAspectRatio: 'xMidYMid meet',
    width: 100,
    height: 100,
    style: {
      maxWidth: '100px',
      margin: 'auto',
      position: 'relative',
      top: '-5%'
    }
  }
}
