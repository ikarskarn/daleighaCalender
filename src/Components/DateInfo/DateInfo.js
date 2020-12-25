import React from "react";
import "./DateInfo.css";
import Context from "../../Context";

class DateInfo extends React.Component {
    static contextType = Context;
    returnDay = () => {
        const d = this.context.currentDate.getDay();
        let str = "";
        switch (d) {
            case 0:
                str = "Sunday";
                break;
            case 1:
                str = "Monday";
                break;
            case 2:
                str = "Tuesday";
                break;
            case 3:
                str = "Wednesday";
                break;
            case 4:
                str = "Thursday";
                break;
            case 5:
                str = "Friday";
                break;
            case 6:
                str = "Saturday";
                break;
            default:
                str = "";
                break;
        }
        return str;
    };
    returnMonth = () => {
        const m = this.context.currentDate.getMonth();
        let str = "";
        switch (m) {
            case 0:
                str = "January";
                break;
            case 1:
                str = "February";
                break;
            case 2:
                str = "March";
                break;
            case 3:
                str = "April";
                break;
            case 4:
                str = "May";
                break;
            case 5:
                str = "June";
                break;
            case 6:
                str = "July";
                break;
            case 7:
                str = "August";
                break;
            case 8:
                str = "September";
                break;
            case 9:
                str = "October";
                break;
            case 10:
                str = "November";
                break;
            case 11:
                str = "December";
                break;
            default:
                str = "";
                break;
        }
        return str;
    };
    returnDayOfMonth = () => {
        const d = this.context.currentDate.getDate();
        let str = "";
        if (d === 1 || d === 21 || d === 31) {
            str = `${d}st`;
        } else if (d === 2 || d === 22) {
            str = `${d}nd`;
        } else if (d === 3 || d === 23) {
            str = `${d}rd`;
        } else {
            str = `${d}th`;
        }
        return str;
    };
    render() {
        console.log(this.context.currentDate.getDay());

        return (
            <section className="date-info-content">
                <h2>{this.returnDay()}</h2>
                <h3>{this.returnMonth()}</h3>
                <h3>{this.returnDayOfMonth()}</h3>
            </section>
        );
    }
}

export default DateInfo;
