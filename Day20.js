var status = 'Global Status';

setTimeout(() => {
    const status = 'setTimeout Status';

    const data = {
        status: 'data Status',
        getStatus () {
            return this.status;
        }
    };

    console.log(data.getStatus());
    console.log(data.getStatus.call(this));
}, 0);