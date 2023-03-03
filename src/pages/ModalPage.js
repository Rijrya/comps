import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";

function ModalPage() {

    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    }

    const handleClose = () => {
        setShowModal(false);
    }

    const actionBar = <div>
        <Button primary onClick={handleClose}>I Accept</Button>
    </div>

    const modal = <Modal onClose={handleClose} 
    actionBar={actionBar}>
        <p>
            Here is an important agreement for you to accept
        </p>
    </Modal>;

    return (
    <div>
        <Button onClick={handleClick} primary>Open Modal</Button>
        {showModal && modal}
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut justo malesuada, consectetur nulla a, vulputate tortor. Maecenas quis elementum nibh, et dapibus massa. In rhoncus neque ipsum. Nullam aliquam risus vel turpis faucibus, et luctus sapien suscipit. Praesent in neque id erat ullamcorper aliquet. Duis rutrum enim eu dignissim posuere. Ut nec sapien risus.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut justo malesuada, consectetur nulla a, vulputate tortor. Maecenas quis elementum nibh, et dapibus massa. In rhoncus neque ipsum. Nullam aliquam risus vel turpis faucibus, et luctus sapien suscipit. Praesent in neque id erat ullamcorper aliquet. Duis rutrum enim eu dignissim posuere. Ut nec sapien risus.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut justo malesuada, consectetur nulla a, vulputate tortor. Maecenas quis elementum nibh, et dapibus massa. In rhoncus neque ipsum. Nullam aliquam risus vel turpis faucibus, et luctus sapien suscipit. Praesent in neque id erat ullamcorper aliquet. Duis rutrum enim eu dignissim posuere. Ut nec sapien risus.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut justo malesuada, consectetur nulla a, vulputate tortor. Maecenas quis elementum nibh, et dapibus massa. In rhoncus neque ipsum. Nullam aliquam risus vel turpis faucibus, et luctus sapien suscipit. Praesent in neque id erat ullamcorper aliquet. Duis rutrum enim eu dignissim posuere. Ut nec sapien risus.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut justo malesuada, consectetur nulla a, vulputate tortor. Maecenas quis elementum nibh, et dapibus massa. In rhoncus neque ipsum. Nullam aliquam risus vel turpis faucibus, et luctus sapien suscipit. Praesent in neque id erat ullamcorper aliquet. Duis rutrum enim eu dignissim posuere. Ut nec sapien risus.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut justo malesuada, consectetur nulla a, vulputate tortor. Maecenas quis elementum nibh, et dapibus massa. In rhoncus neque ipsum. Nullam aliquam risus vel turpis faucibus, et luctus sapien suscipit. Praesent in neque id erat ullamcorper aliquet. Duis rutrum enim eu dignissim posuere. Ut nec sapien risus.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut justo malesuada, consectetur nulla a, vulputate tortor. Maecenas quis elementum nibh, et dapibus massa. In rhoncus neque ipsum. Nullam aliquam risus vel turpis faucibus, et luctus sapien suscipit. Praesent in neque id erat ullamcorper aliquet. Duis rutrum enim eu dignissim posuere. Ut nec sapien risus.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut justo malesuada, consectetur nulla a, vulputate tortor. Maecenas quis elementum nibh, et dapibus massa. In rhoncus neque ipsum. Nullam aliquam risus vel turpis faucibus, et luctus sapien suscipit. Praesent in neque id erat ullamcorper aliquet. Duis rutrum enim eu dignissim posuere. Ut nec sapien risus.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut justo malesuada, consectetur nulla a, vulputate tortor. Maecenas quis elementum nibh, et dapibus massa. In rhoncus neque ipsum. Nullam aliquam risus vel turpis faucibus, et luctus sapien suscipit. Praesent in neque id erat ullamcorper aliquet. Duis rutrum enim eu dignissim posuere. Ut nec sapien risus.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut justo malesuada, consectetur nulla a, vulputate tortor. Maecenas quis elementum nibh, et dapibus massa. In rhoncus neque ipsum. Nullam aliquam risus vel turpis faucibus, et luctus sapien suscipit. Praesent in neque id erat ullamcorper aliquet. Duis rutrum enim eu dignissim posuere. Ut nec sapien risus.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut justo malesuada, consectetur nulla a, vulputate tortor. Maecenas quis elementum nibh, et dapibus massa. In rhoncus neque ipsum. Nullam aliquam risus vel turpis faucibus, et luctus sapien suscipit. Praesent in neque id erat ullamcorper aliquet. Duis rutrum enim eu dignissim posuere. Ut nec sapien risus.
        </p>

    </div>);
}


export default ModalPage;