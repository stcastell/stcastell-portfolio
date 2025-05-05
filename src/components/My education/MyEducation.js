import React from "react";
import styles from './MyEducation.module.css';
import Certification from "./Certification";

const MyEducation = () => { 

    const myEducation = [
        {
            imageLink:'https://img.icons8.com/color/96/google-logo.png',
            imageAlt:'Logo de Google',
            title: 'Introduccion al desarrollo web 1',
            certifyedBy:'Google',
            finishedOn:'Abril, 2020',
            certificateID: 'F9Q SJK S78',
            certificateLink: 'https://learndigital.withgoogle.com/activate/validate-certificate-code',
        },
        {
            imageLink: 'https://img.icons8.com/color/96/google-logo.png', 
            imageAlt: 'Logo de Google',
            title: 'Introduccion al desarrollo web 2',
            certifyedBy: 'Google',
            finishedOn: 'Septiembre, 2020',
            certificateID: 'A9M XS6 DSD',
            certificateLink: 'https://learndigital.withgoogle.com/activate/validate-certificate-code',
        },
        {
            imageLink: 'https://prowly-prod.s3.eu-west-1.amazonaws.com/uploads/60169/assets/601039/large-76a270657e9a0d62548da88a48ae0042.png', 
            imageAlt: 'Logo de Semrush',
            title: 'Analista SEO',
            certifyedBy: 'Semrush',
            finishedOn: 'Enero, 2025',
            certificateID: '515508',
            certificateLink: 'https://static.semrush.com/academy/certificates/43fd61ffda/santiago-castellanos_1.pdf',
        },
        {
            imageLink: 'https://blob.sololearn.com/avatars/sololearn.png',
            imageAlt: 'Logo de SoloLearn',
            title: 'PHP',
            certifyedBy: 'SoloLearn',
            finishedOn: 'Noviembre, 2019',
            certificateID: 'UC-624ccd5f-ec34-4517-8a2d-2bdc5c4b665d',
            certificateLink: 'https://www.sololearn.com/Certificate/1059-5794507/pdf/',
        },
        {
            imageLink: 'https://www.svgrepo.com/show/342324/udemy.svg',
            imageAlt: 'Logo de Udemy',
            title: 'React.js',
            certifyedBy: 'Udemy',
            finishedOn: 'Febrero, 2024',
            certificateID: 'UC-5a0c84bb-2ea1-41f7-a1c9-584c61befcb0',
            certificateLink: 'https://ude.my/UC-5a0c84bb-2ea1-41f7-a1c9-584c61befcb0/',
        },
        {
            imageLink: 'https://www.svgrepo.com/show/342324/udemy.svg',
            imageAlt: 'Logo de Udemy',
            title: 'PHP y MySQL',
            certifyedBy: 'Udemy',
            finishedOn: 'Febrero, 2024',
            certificateID: '1059-5794507',
            certificateLink: 'https://ude.my/UC-624ccd5f-ec34-4517-8a2d-2bdc5c4b665d/',
        },
        {
            imageLink: 'https://blob.sololearn.com/avatars/sololearn.png',
            imageAlt: 'Logo de SoloLearn',
            title: 'JavaScript',
            certifyedBy: 'SoloLearn',
            finishedOn: 'Marzo, 2021',
            certificateID: '5794507-1024',
            certificateLink: 'https://www.sololearn.com/certificates/course/en/5794507/1024/landscape/png',
        },
        {
            imageLink: 'https://www.svgrepo.com/show/342324/udemy.svg',
            imageAlt: 'Logo de Wordpress',
            title: 'Wordpress',
            certifyedBy: 'Udemy',
            finishedOn: 'Enero, 2024',
            certificateID: 'No disponible',
            certificateLink: 'unavailable',
        },
    ]

    return (
        <div className={styles['my-education-container']} id='education'>
            {myEducation.map(item =>
                <Certification key={Math.random()} imageLink={item.imageLink} imageAlt={item.imageAlt} title={item.title} certifyedBy={item.certifyedBy} finishedOn={item.finishedOn} certificateID={item.certificateID} certificateLink={item.certificateLink} />
                )}
        </div>
    );
}

export default MyEducation;