import React from "react";
import styles from './MyEducation.module.css';
import Certification from "./Certification";

const MyEducation = () => { 

    const myEducation = [
        {
            imageLink:'https://img.icons8.com/color/96/google-logo.png',
            imageAlt:'Google logo',
            title: 'Introduction to web development 1',
            certifyedBy:'Google',
            finishedOn:'April, 2020',
            certificateID: 'F9Q SJK S78',
            certificateLink: 'https://learndigital.withgoogle.com/activate/validate-certificate-code',
        },
        {
            imageLink: 'https://img.icons8.com/color/96/google-logo.png', 
            imageAlt: 'Google logo',
            title: 'Introduction to web development 2',
            certifyedBy: 'Google',
            finishedOn: 'September, 2020',
            certificateID: 'A9M XS6 DSD',
            certificateLink: 'https://learndigital.withgoogle.com/activate/validate-certificate-code',
        },
        {
            imageLink: 'https://blob.sololearn.com/avatars/sololearn.png',
            imageAlt: 'SoloLearn logo',
            title: 'PHP',
            certifyedBy: 'SoloLearn',
            finishedOn: 'November, 2019',
            certificateID: '1059-5794507',
            certificateLink: 'https://www.sololearn.com/Certificate/1059-5794507/pdf/',
        },
    ]

    return (
        <div className={styles['my-education-container']}>
            {myEducation.map(item =>
                <Certification imageLink={item.imageLink} imageAlt={item.imageAlt} title={item.title} certifyedBy={item.certifyedBy} finishedOn={item.finishedOn} certificateID={item.certificateID} certificateLink={item.certificateLink} />
                )}
        </div>
    );
}

export default MyEducation;