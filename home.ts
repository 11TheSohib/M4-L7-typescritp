{
    function minArr(arr: number[]): number {
        let minNum: number = 0;
        for (let i of arr) {
            if (minNum > i) minNum = i;
        }

        return minNum;
    }
}

{
    function arrToString(arr: string[]): string {
        const strArr: string = arr.join(`, `);
        return strArr;
    }
}

{
    function saveTuple(
        tuple: [username: string, loginTime: Date, isLoggedIn: boolean]
    ) {
        let usersObj: any = {};
        if (usersObj[tuple[0]]) return `Already has user`;
        usersObj[tuple[0]] = [tuple[1], tuple[2]];

        return tuple;
    }
}

{
    type Phone = { brand: string; model: string; price: number };
    const phones: Phone[] = [];

    function expensivePhone(phone: Phone) {
        phones.push(phone);
        let maxNum: number = 0;
        for (let i of phones) {
            if (maxNum < i.price) maxNum = i.price;
        }

        return maxNum;
    }
}

{
    type Student = {
        name: string;
        grade: `Male` | `Famale`;
        isActive: boolean;
    };
    const students: Student[] = [];

    function isActive(student: Student) {
        students.push(student);
        const isActiveStudent: Student[] = [];
        for (let i of students) {
            if (i.isActive == true) isActiveStudent.push(i);
        }

        return isActiveStudent;
    }
}
