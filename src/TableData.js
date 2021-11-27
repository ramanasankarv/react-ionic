const columns = [
    {
        id: 'reportId',
        label: 'Flag ID',
        class: 'width100'
    },
    {
        id: 'title',
        label: 'Title',
        class: 'width300'
    },
    {
        id: 'url',
        label: 'Url',
        class: 'width100'
    },
    {
        id: 'snippet',
        label: 'Snippet',
        class: 'width300'
    },
    {
        id: 'category.flagType',
        label: 'Category',
        class: 'width100'
    },
    {
        id: 'category.flagTypeValue',
        label: 'Flag',
        class: 'width200'
    },
    {
        id:'category.flagSeverity',
        label:'Priority',
        class: 'width100'
    },
    {
        id:'familyMember.firstName',
        label:'User Name',
        class: 'width200'
    },
    {
        id:'familyMember.email',
        label:'User Email',
        class: 'width300'
    },
];

const source_columns = [
    {
        id: 'source',
        label: 'Source',
        class: 'width100'
    },
    {
        id: 'remediate',
        label: 'Remediate',
        class: 'width300'
    },
    {
        id: 'unknownSource',
        label: 'Unknown Source',
        class: 'width100'
    },
    {
        id: 'createdDate',
        label: 'Created Date',
        class: 'width300'
    }
];



export { columns,source_columns };