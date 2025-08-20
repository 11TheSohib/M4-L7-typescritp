{
    type Narx = string | number;
    function fnStrOrNum(narx: Narx) {
        if (typeof narx == 'string') return Number(narx);

        return narx * 2;
    }
    
    console.log(fnStrOrNum('12'));
}