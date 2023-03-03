import Button from "../components/Button";
import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';

function ButtonPage() {

    const handleClick = () => {
        console.log('Click!!');
    };

    return (
    <div>
        <div>
            <Button primary onClick={handleClick}>
                <GoBell />
                adfasfdsafas
            </Button>
        </div>
        <div>
            <Button secondary>
                <GoCloudDownload />
                fsdgsdfsfgd
            </Button>
        </div>
        <div>
            <Button success rounded>
                <GoDatabase />
                sdfasdafdasf
            </Button>
        </div>
        <div>
            <Button warning outline>dsfadsfadsaf</Button>
        </div>
        <div>
            <Button danger rounded outline>dasfdsfasadfadsfdfs</Button>
        </div>
     </div>);


}

export default ButtonPage;