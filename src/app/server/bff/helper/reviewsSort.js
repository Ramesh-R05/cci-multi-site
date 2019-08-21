const reviewSort = alphabet => (a, b) => {
    const indexA = alphabet.indexOf(a.contentTitle.toLowerCase()[0]);
    const indexB = alphabet.indexOf(b.contentTitle.toLowerCase()[0]);

    if (indexA === indexB) {
        if (a < b) {
            return -1;
        }

        if (a > b) {
            return 1;
        }

        return 0;
    }

    return indexA - indexB;
};

export default reviewSort;
