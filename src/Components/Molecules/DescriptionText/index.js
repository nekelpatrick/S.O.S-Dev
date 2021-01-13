import Section2Content from "./style";

import Type from "../../Atoms/Types";
import Image from "../../Atoms/Image";

const DescriptionText = () => {
    const text = "blá blá blá, wiskas sachê, blá blá blá, wiskas sachê, blá blá blá, wiskas sachê, blá blá blá, wiskas sachê, blá blá blá, wiskas sachê, blá blá blá, wiskas sachê !";

    return (
        <Section2Content>
            <div className="second-image-content">
                <Image />
            </div>
            <div className="description-text-content">
                <Type variant="body1" text={text}/>
            </div>
        </Section2Content>
    );
};

export default DescriptionText;