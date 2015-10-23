// Type definitions for Bootstrap datetimepicker v3
// Project: http://eonasdan.github.io/bootstrap-datetimepicker
// Definitions by: Jesica N. Fera <https://github.com/bayitajesi>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/**
 * bootstrap-datetimepicker.js 3.0.0 Copyright (c) 2014 Jonathan Peterson
 * Available via the MIT license.
 * see: http://eonasdan.github.io/bootstrap-datetimepicker or https://github.com/Eonasdan/bootstrap-datetimepicker for details.
 */

/// <reference path="../jquery/jquery.d.ts"/>

declare module BootstrapV3DatetimePicker {
    interface DatetimepickerChangeEventObject extends JQueryEventObject {
        date: any;
        oldDate: any;
    }

    interface DatetimepickerEventObject extends JQueryEventObject {
        date: any;
    }

    interface DatetimepickerIcons {
        time?: string;
        date?: string;
        up?: string;
        down?: string;
        previous?: string;
        next?: string;
        today?: string;
        clear?: string;
        close?: string;
    }

    interface DatetimepickerTooltips {
        today?: string;
        clear?: string;
        close?: string;
        selectMonth?: string;
        prevMonth?: string;
        nextMonth?: string;
        selectYear?: string;
        prevYear?: string;
        nextYear?: string;
        selectDecade?: string;
        prevDecade?: string;
        nextDecade?: string;
        prevCentury?: string;
        nextCentury?: string;
    }

    interface DatetimepickerHPositioning {
        horizontal: string;
    }

    interface DatetimepickerVPositioning {
        vertical: string;
    }

    interface DatetimepickerBothPositioning {
        horizontal: string;
        vertical: string;
    }

    type DatetimepickerPositioning = DatetimepickerHPositioning|DatetimepickerVPositioning|DatetimepickerBothPositioning;

    interface DatetimepickerKeybinds {
        [key: string]: (widget: JQuery) => void;
    }

    interface DatetimepickerOptions {
        format?: string;
        dayViewHeaderFormat?: string;
        extraFormats?: string[];
        stepping?: number;
        minDate?: Date|moment.Moment|string;
        maxDate?: Date|moment.Moment|string;
        useCurrent?: boolean|string;
        collapse?: boolean;
        locale?: string|moment.MomentLanguage;
        defaultDate?: Date|moment.Moment|string;
        disabledDates?: Array<Date|moment.Moment|string>;
        enabledDates?: Array<Date|moment.Moment|string>;
        icons?: DatetimepickerIcons;
        useStrict?: boolean;
        sideBySide?: boolean;
        daysOfWeekDisabled?: number[];
        calendarWeeks?: boolean;
        viewMode?: string;
        toolbarPlacement?: string;
        showTodayButton?: boolean;
        showClear?: boolean;
        showClose?: boolean;
        widgetPositioning?: DatetimepickerPositioning;
        widgetParent?: string|JQuery;
        keepOpen?: boolean;
        inline?: boolean;
        keepInvalid?: boolean;
        keyBinds?: DatetimepickerKeybinds;
        debug?: boolean;
        ignoreReadonly?: boolean;
        disabledTimeIntervals?: Array<[moment.Moment, moment.Moment]>;
        allowInputToggle?: boolean;
        focusOnShow?: boolean;
        enabledHours?: number[];
        viewDate?: any;
        tooltips?: DatetimepickerTooltips;
    }

    interface Datetimepicker {
        destroy(): void;
        toggle(): void;
        show(): void;
        hide(): void;
        disable(): void;
        enable(): void;
        date(): moment.Moment;
        date(d: string|Date|moment.Moment): void;
        disabledDates(): moment.Moment[];
        disabledDates(d: Array<string|Date|moment.Moment>): void;
        enabledDates(): moment.Moment[];
        enabledDates(d: Array<string|Date|moment.Moment>): void;
        defaultDate(): moment.Moment|boolean;
        defaultDate(d: string|Date|moment.Moment|boolean): void;
        useCurrent(): string|boolean;
        useCurrent(useCurrent: boolean|string): void;
        minDate(): moment.Moment|boolean;
        minDate(d: string|Date|moment.Moment|boolean): void;
        maxDate(): moment.Moment|boolean;
        maxDate(d: string|Date|moment.Moment|boolean): void;
        daysOfWeekDisabled(): number[];
        daysOfWeekDisabled(days: number[]): void;
        options(): DatetimepickerOptions;
        options(options: DatetimepickerOptions): void;
        format(): string;
        format(fmt: string): void;
        extraFormats(): boolean|string[];
        extraFormats(formats: string[]): void;
        locale(): string;
        locale(newLocale: string): void;
        stepping(): number;
        stepping(step: number): void;
        sideBySide(): boolean;
        sideBySide(sideBySide: boolean): void;
        collapse(): boolean;
        collapse(collapse: boolean): void;
        icons(): DatetimepickerIcons;
        icons(icons: DatetimepickerIcons): void;
        useStrict(): boolean;
        useStrict(useStrict: boolean): void;
        widgetPositioning(): DatetimepickerPositioning;
        widgetPositioning(positioning: DatetimepickerPositioning): void;
        viewMode(): string;
        viewMode(mode: string): void;
        calendarWeeks(): boolean;
        calendarWeeks(weeks: boolean): void;
        showClear(): boolean;
        showClear(show: boolean): void;
        showTodayButton(): boolean;
        showTodayButton(show: boolean): void;
        toolbarplacement(): string;
        toolbarplacement(placement: string): void;
        dayViewHeaderFormat(): string;
        dayViewHeaderFormat(format: string): void;
        keyBinds(): DatetimepickerKeybinds;
        keyBinds(keybinds: DatetimepickerKeybinds): void;
        clear(): void;
        inline(): boolean;
        inline(inline: boolean): void;
        ignoreReadonly(): boolean;
        ignoreReadonly(ignore: boolean): boolean;
        showClose(): boolean;
        showClose(show: boolean): void;
        debug(): void;
        keepInvalid(): boolean;
        keepInvalid(keepInvalid: boolean): void;
        allowInputToggle(): boolean;
        allowInputToggle(allowInputToggle: boolean): void;
        focusOnShow(): boolean;
        focusOnShow(focusOnShow: boolean): void;
        disabledTimeIntervals(): Array<[moment.Moment, moment.Moment]>;
        disabledTimeIntervals(intervals: Array<[moment.Moment, moment.Moment]>): void;
        enabledHours(): number[];
        enabledHours(hours: number[]): void;
        disabledHours(): number[];
        disabledHours(hours: number[]): void;
        viewDate(): moment.Moment;
        viewDate(date: string|Date|moment.Moment): void;
        parseInputDate(): (input: string) => moment.Moment;
        parseInputDate(parseFunction: (input: string) => moment.Moment): void;
        tooltips(): DatetimepickerTooltips;
        tooltips(tooltips: DatetimepickerTooltips): void;
    }

}


interface JQuery {

    datetimepicker(): JQuery;
    datetimepicker(options: BootstrapV3DatetimePicker.DatetimepickerOptions): JQuery;

    off(events: "dp.change", selector?: string, handler?: (eventobject: BootstrapV3DatetimePicker.DatetimepickerChangeEventObject) => any): JQuery;
    off(events: "dp.change", handler: (eventobject: BootstrapV3DatetimePicker.DatetimepickerChangeEventObject) => any): JQuery;

    on(events: "dp.change", selector: string, data: any, handler?: (eventobject: BootstrapV3DatetimePicker.DatetimepickerChangeEventObject) => any): JQuery;
    on(events: "dp.change", selector: string, handler: (eventobject: BootstrapV3DatetimePicker.DatetimepickerChangeEventObject) => any): JQuery;
    on(events: 'dp.change', handler: (eventObject: BootstrapV3DatetimePicker.DatetimepickerChangeEventObject) => any): JQuery;

    off(events: "dp.show", selector?: string, handler?: (eventobject: BootstrapV3DatetimePicker.DatetimepickerEventObject) => any): JQuery;
    off(events: "dp.show", handler: (eventobject: BootstrapV3DatetimePicker.DatetimepickerEventObject) => any): JQuery;

    on(events: "dp.show", selector: string, data: any, handler?: (eventobject: BootstrapV3DatetimePicker.DatetimepickerEventObject) => any): JQuery;
    on(events: "dp.show", selector: string, handler: (eventobject: BootstrapV3DatetimePicker.DatetimepickerEventObject) => any): JQuery;
    on(events: 'dp.show', handler: (eventObject: BootstrapV3DatetimePicker.DatetimepickerEventObject) => any): JQuery;

    off(events: "dp.hide", selector?: string, handler?: (eventobject: BootstrapV3DatetimePicker.DatetimepickerEventObject) => any): JQuery;
    off(events: "dp.hide", handler: (eventobject: BootstrapV3DatetimePicker.DatetimepickerEventObject) => any): JQuery;

    on(events: "dp.hide", selector: string, data: any, handler?: (eventobject: BootstrapV3DatetimePicker.DatetimepickerEventObject) => any): JQuery;
    on(events: "dp.hide", selector: string, handler: (eventobject: BootstrapV3DatetimePicker.DatetimepickerEventObject) => any): JQuery;
    on(events: 'dp.hide', handler: (eventObject: BootstrapV3DatetimePicker.DatetimepickerEventObject) => any): JQuery;

    off(events: "dp.error", selector?: string, handler?: (eventobject: BootstrapV3DatetimePicker.DatetimepickerEventObject) => any): JQuery;
    off(events: "dp.error", handler: (eventobject: BootstrapV3DatetimePicker.DatetimepickerEventObject) => any): JQuery;

    on(events: "dp.error", selector: string, data: any, handler?: (eventobject: BootstrapV3DatetimePicker.DatetimepickerEventObject) => any): JQuery;
    on(events: "dp.error", selector: string, handler: (eventobject: BootstrapV3DatetimePicker.DatetimepickerEventObject) => any): JQuery;
    on(events: 'dp.error', handler: (eventObject: BootstrapV3DatetimePicker.DatetimepickerEventObject) => any): JQuery;

    data(key: 'DateTimePicker'): BootstrapV3DatetimePicker.Datetimepicker;
}
