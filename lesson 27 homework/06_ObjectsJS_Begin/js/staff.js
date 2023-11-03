class Staff{
    /**
     * Required things(I say things because I can't decide which of the tree descriptions to use. Etc. traits)
        * @param {string} name
        * @param {string} email
        * @param {string} staffId
        * Optional things
        * verificationStatus
        * assignedTasks
        * workingDays
        */
    constructor (name, email, staffId){
        // Required Inputs
        this.name = name;
        this.email = email;
        this.staffId = staffId;
        // Optional Inputs
        this.verificationStatus = false;
        this.assignedTasks = [];
        this.workingDays = [];
    }

    changeUsername(username){
        // Assign the new username to this.name
        this.name = username
        console.log(this.name);
    }  

    changeEmail(email){
        this.email = email;
        console.log(this.email);
    } 

    changeVerificationStatus(status){
        this.verificationStatus = status;
        console.log(this.verificationStatus);
    }

    assignTask(task){
        this.assignedTasks.push(task);
        console.log(this.assignedTasks);
    }

    assignWorkingDay(day){
        this.workingDays.push(day);
        console.log(this.workingDays);
    }
}

export default Staff;