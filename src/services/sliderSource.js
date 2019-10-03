export function handleAndProcessInitialSource(
    data, {
        argument_to_title,
        argument_to_desc
    }
) {

    return data.map((sourceItem, index) => {

        const item = {};
        item.title = (argument_to_title in sourceItem) ?
            sourceItem[argument_to_title] :
            sourceItem['title'];
        item.description = (argument_to_desc in sourceItem) ?
            sourceItem[argument_to_desc] :
            sourceItem['description'];
        item.key = index;
        item.active = index === 0;
        return item;
    });
}