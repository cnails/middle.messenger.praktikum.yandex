import Handlebars from 'handlebars';

export const templator = (source: string, props: any): string => {
    const template = Handlebars.compile(source);
    return template(props);
}
