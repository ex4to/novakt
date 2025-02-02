import { SVGProps } from 'react'

export const EmailIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg width="24px" height="24px" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5l-8-5V6l8 5l8-5v2z"
      ></path>
    </svg>
  )
}
