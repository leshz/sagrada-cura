import { PAYMENT_STATUS } from '@/utils/constants'

const ErrorIcon = () => (
  <svg
    className="confirmation confirmation-icon failed"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle className="circle" cx="12" cy="12" r="10" />

    <line className="checkmark" x1="8" y1="8" x2="16" y2="16" />
    <line className="checkmark" x1="8" y1="16" x2="16" y2="8" />
  </svg>
)

const ApprovedIcon = () => (
  <svg
    className="confirmation confirmation-icon approved"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle className="circle" cx="12" cy="12" r="10" />
    <path className="checkmark" d="m9 12 2 2 4-4" />
  </svg>
)

const Pending = () => (
  <svg
    className="confirmation confirmation-icon pending"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle className="circle" cx="12" cy="12" r="10" />

    <line className="checkmark" x1="12" y1="8" x2="12" y2="14" />
    <line className="checkmark" x1="12" y1="16" x2="12" y2="16" />
  </svg>
)

const IconAnimation = ({ status }) => {
  switch (status) {
    case PAYMENT_STATUS.PENDING:
      return <Pending />
    case PAYMENT_STATUS.APPROVED:
      return <ApprovedIcon />
    default:
      return <ErrorIcon />
  }
}

export { IconAnimation }
