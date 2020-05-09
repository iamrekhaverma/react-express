import React from "react";
import FullCalendarRender from "./fullCalendarRender";
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

class FullCalendar extends React.Component {
  constructor(props) {
    super(props);
    this.options = {
      header: {
        left: "prev,next today",
        center: "title",
        right: "month,agendaWeek,agendaDay,listWeek"
      },
      view:"dayGridMonth",
      plugins:[ dayGridPlugin, interactionPlugin ],
      height: 1200, // Sets the height of the entire calendar, including header and footer.
      defaultDate: new Date(),
      selectable: true,
      selectHelper: true,
      navLinks: false, // can click day/week names to navigate views
      editable: false,
      eventLimit: true, // allow "more" link when too many events
      eventClick: event => {
        console.log("event clicked",event)
        // let clickedDate = moment(event.start).format("YYYY-MM-DD");
        // if (event.classTimeId && event.classTypeId) {
        //   this.props.showEventModal(true, event, clickedDate);
        // }
      },
      eventSources :[this.buildCalander()],
      events: function(info, successCallback, failureCallback) {
        // This function will be called whenever date changes.
        console.log('next');
      }
    };
  }

  buildCalander = () => {
    // let sevents;
    const sevents = [
        { title: 'Event Now', start: new Date() }
      ];
    return sevents;
  };

  render() {
    return (<div>Content</div>);
  }
}

export default FullCalendar;
