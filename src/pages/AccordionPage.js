import Accordion from '../components/Accordion';
function AccordionPage() {

    const items = [
        {
            id: 'asdfasdf',
            label: 'Can I use react on a project?',
            content: 'you can use react on any project you want you can use react on any project you want you can use react on any project you want you can use react on any project you want'
        },
        {
            id: 'bob',
            label: 'Can I use js on a project?',
            content: 'you can use js on any project you want you can use react on any project you want you can use react on any project you wantyou can use react on any project you want'

        },
        {
            id: 'andy',
            label: 'Can I use css on a project?',
            content: 'you can use css on any project you wantyou can use react on any project you wantyou can use react on any project you wantyou can use react on any project you want'

        }
    ]

    return <Accordion items={items}/>;
}

export default AccordionPage;