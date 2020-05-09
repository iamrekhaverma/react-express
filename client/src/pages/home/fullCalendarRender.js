import React from 'react'
import * as ReactDOM from 'react-dom'
import { Calendar, OptionsInput, createPlugin, mapHash } from '@fullcalendar/core'
import { diffProps } from './utils'

import './main.css'

export default class FullCalendarRenderer extends React.Component {

  calendarComponentRef = React.createRef()
  elRef = React.createRef()
  state = {
    calendarWeekends: true,
    calendarEvents: [ // initial event data
      { title: 'Event Now', start: new Date() }
    ]
  }
  

  componentDidMount() {
    this.calendar = new Calendar(this.elRef.current, processInitialOptions(this.props.options))
    this.calendar.render();
  }

  componentDidUpdate(oldProps) {
    let diff = diffProps(oldProps, this.props)
    if (diff.anyChanges) {
      this.calendar.mutateOptions(diff.updates, diff.removals)
    }
  }

  componentWillUnmount() {
    this.calendar.destroy()
  }

  getApi() {
    return this.calendar
  }


  render() {
    return (
      <div className='demo-app'>
        <div ref={this.elRef}></div>
      </div>
    )
  }
}


function processInitialOptions(options) {
  let processedOptions = mapHash(options, (optionVal, optionName) => {

    if (
      typeof optionVal === 'function' &&
      optionName.match(/Content$/) // HACKY. only settings like eventContent
    ) {
      return wrapVDomGenerator(optionVal) // will return a result like { react:.. }
    } else {
      return optionVal
    }
  })

  return {
    ...processedOptions,
    plugins: (processedOptions.plugins || []).concat([
      ReactContentTypePlugin
    ])
  }
}


function wrapVDomGenerator(vDomGenerator) {
  return function() {
    return { react: vDomGenerator.apply(this, arguments) }
  }
}


const ReactContentTypePlugin = createPlugin({
  contentTypeHandlers: {
    react: buildVDomHandler
  }
})


function buildVDomHandler() {
  let currentEl

  return function(el, vDomContent) { // the handler

    if (currentEl !== el) {
      if (currentEl) {
        ReactDOM.unmountComponentAtNode(currentEl)
      }
      currentEl = el
    }

    ReactDOM.render(vDomContent, el)
  }
}