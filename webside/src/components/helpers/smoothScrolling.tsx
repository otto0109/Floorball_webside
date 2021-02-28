export const scrollToTop = () => {

    let list = document.querySelector("ion-content");
    return list && list.scrollToTop(2000);
};

export const scrollTo = (id: string) => {

    let element = document.getElementById(id);

    return element && element.scrollIntoView({ behavior: 'smooth'});
};