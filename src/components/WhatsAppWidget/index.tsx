import Link from "next/link";
import './wp.css'

function WhatsAppWidget() {
  return (
    <div>
      <Link
        href="https://api.whatsapp.com/send?phone=9052729776&text=Hello! I'm interested in your services."
        className="float"
        target="_blank"
      >
        <i className="fa fa-whatsapp my-float"></i>
      </Link>
    </div>
  );
}

export default WhatsAppWidget;

