<template>
  <div>
	<full-calendar
        ref="calendar"
        :config="{
            ...config,
            viewRender: handleChangeMonth
        }"
        :events="eventos"
        @viewRender="handleChangeMonth"
    />
  </div>
</template>

<script>
	import moment from 'moment'

import { FullCalendar } from 'vue-full-calendar'
import 'fullcalendar/dist/locale/es'


import 'fullcalendar/dist/fullcalendar.css'

import peticiones from '@/apis/usePeticiones'
import customHelpers  from '@helpers/customHelpers'

export default {
    name: 'CalendarComponent',
    mixins : [customHelpers],
    components: {
        FullCalendar
    },
    mounted() {},
    data() {
        return {
			// events: [
			// 	{
			// 		title: 'test',
			// 		allDay: true,
			// 		start: moment(),
			// 		end: moment().add(1, 'd'),
			// 	},
			// 	{
			// 		title: 'test',
			// 		allDay: true,
			// 		start: moment(),
			// 		end: moment().add(1, 'd'),
			// 	},
			// 	{
			// 		title: 'test',
			// 		allDay: true,
			// 		start: moment(),
			// 		end: moment().add(1, 'd'),
			// 	},
			// 	{
			// 		title: 'test',
			// 		allDay: true,
			// 		start: moment(),
			// 		end: moment().add(1, 'd'),
			// 	},
			// 	{
			// 		title: 'test',
			// 		allDay: true,
			// 		start: moment(),
			// 		end: moment().add(1, 'd'),
			// 	},
			// 	{
			// 		title: 'test',
			// 		allDay: true,
			// 		start: moment(),
			// 		end: moment().add(1, 'd'),
			// 	},
			// 	{
			// 		title: 'another test',
			// 		start: moment().add(2,'d'),
			// 		end: moment().add(2, 'd').add(2, 'h'),
			// 	},
			// ],
            eventos:[],
			config: {
                locale: 'es',
                defaultDate: new Date(),
                defaultView: 'month',
			    eventRender: function(event, element) {
            	    console.log(event)
    		    },
                eventClick: function(event, element) {
            	    console.log('event', event)
            	    console.log('element', element)
    		    },
                // viewRender: function(event, element,viw) {
            	//     this.handleChangeMonth(event)
    		    // }
            },
        }
    },
    beforeMount() {
        peticiones
        .getReservaciones({ })
        .then(response => {
            console.log(response)
            let tmp =  response.data.data
            let eventsTmp = []
            tmp.map((item) => {
                eventsTmp.push({
                    id:item.id,
					title: 'Reservacion',
					allDay: true,
					start: item.fechaInicio,
					end: item.fechaFin,
                })
            })
            this.eventos = this.copyObject(eventsTmp)
        })
        .catch(error   => { console.log(error); })
    },
    methods:{
        handleChangeMonth(e){
            console.log(e);
        },
    }
}
</script>
<style>
    .fc-right > .fc-button-group {
        display: none!important;;
    }
    .fc-day-header > span,
    .fc-center > h2 {
        text-transform: uppercase!important;;
    }
    .fc-event {
        background-color: cadetblue!important;;
    }
    .fc-event-container > a > div > span {
        color: white!important;;
    }
</style>
