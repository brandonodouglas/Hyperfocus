import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid'



export default function MonthlyCalendar() {
  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin]}
      initialView="timeGridWeek"
      headerToolbar={{
        left: 'prev,next',
        center: 'title',
        right: 'timeGridWeek,timeGridDay,dayGridMonth'
      }}


    />
  )
}