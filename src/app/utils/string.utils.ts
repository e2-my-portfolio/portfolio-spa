export class StringUtils {

    public static isNotBlank(s: string): boolean {
        return s && s.trim().length > 0;
    }

    public static capitalize(s: string): string {
        return this.isNotBlank(s) ?
            s.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase()) :
            s;
    }

    public static capitalizeFully(s: string): string {
        if (this.isNotBlank(s)) {
            const words = s.split(' ');
            for (let i = 0; i < words.length; i++) {
                words[i] = words[i][0].toUpperCase() + words[i].substring(1).toLowerCase();
            }
            return words.join(' ');
        }
        return s;
    }

}
