import { Link } from "react-router"


function MailboxList({mailboxes}) {


  return (
    <div>
        <h1>Mailbox List</h1>
        <ul>
            {mailboxes.map(mailbox => (
                <li key={mailbox._id} className="mail-box">
                    <Link to={`/mailboxes/${mailbox._id}`}> Mailbox {mailbox._id} </Link>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default MailboxList