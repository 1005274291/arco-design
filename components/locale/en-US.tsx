import 'dayjs/locale/en';
import { DefaultValidateMessage } from 'b-validate';

const Calendar = {
  formatYear: 'YYYY',
  formatMonth: 'MMM YYYY',
  monthBeforeYear: true,
  today: 'Today',
  view: {
    month: 'Month',
    year: 'Year',
    week: 'Week',
    day: 'Day',
  },
  month: {
    long: {
      January: 'January',
      February: 'February',
      March: 'March',
      April: 'April',
      May: 'May',
      June: 'June',
      July: 'July',
      August: 'August',
      September: 'September',
      October: 'October',
      November: 'November',
      December: 'December',
    },
    short: {
      January: 'Jan',
      February: 'Feb',
      March: 'Mar',
      April: 'Apr',
      May: 'May',
      June: 'Jun',
      July: 'Jul',
      August: 'Aug',
      September: 'Sept',
      October: 'Oct',
      November: 'Nov',
      December: 'Dec',
    },
  },
  week: {
    long: {
      self: 'Week',
      monday: 'Monday',
      tuesday: 'Tuesday',
      wednesday: 'Wednesday',
      thursday: 'Thursday',
      friday: 'Friday',
      saturday: 'Saturday',
      sunday: 'Sunday',
    },
    short: {
      self: 'Week',
      monday: 'Mon',
      tuesday: 'Tue',
      wednesday: 'Wed',
      thursday: 'Thu',
      friday: 'Fri',
      saturday: 'Sat',
      sunday: 'Sun',
    },
  },
};

export default {
  locale: 'en-US',
  dayjsLocale: 'en',
  Calendar,
  DatePicker: {
    Calendar,
    placeholder: {
      date: 'Select date',
      week: 'Select week',
      month: 'Select month',
      year: 'Select year',
      quarter: 'Select quarter',
    },
    placeholders: {
      date: ['Start date', 'End date'],
      week: ['Start week', 'End week'],
      month: ['Start month', 'End month'],
      year: ['Start year', 'End year'],
      quarter: ['Start quarter', 'End quarter'],
    },
    selectTime: 'Select time',
    selectDate: 'Select Date',
    today: 'Today',
    now: 'Now',
    ok: 'OK',
  },
  Drawer: {
    okText: 'OK',
    cancelText: 'Cancel',
  },
  Empty: {
    noData: 'No data',
  },
  Modal: {
    okText: 'OK',
    cancelText: 'Cancel',
  },
  Pagination: {
    goto: 'Goto',
    page: 'Page',
    countPerPage: ' / Page',
    total: 'Total: {0}',
    prev: 'Go to previous page',
    next: 'Go to next page',
    currentPage: 'page {0}',
    prevSomePages: 'Previous {0} pages',
    nextSomePages: 'Next {0} pages',
    pageSize: 'page size',
  },
  Popconfirm: {
    okText: 'OK',
    cancelText: 'Cancel',
  },
  Table: {
    okText: 'OK',
    resetText: 'Reset',
    sortAscend: 'Click to sort ascending',
    sortDescend: 'Click to sort descending',
    cancelSort: 'Click to cancel sorting',
  },
  TimePicker: {
    ok: 'OK',
    placeholder: 'Select time',
    placeholders: ['Start time', 'End time'],
    now: 'Now',
  },
  Progress: {
    success: 'Completed',
    error: 'Failed',
  },
  Upload: {
    start: 'Start',
    cancel: 'Cancel',
    delete: 'Delete',
    reupload: 'Click to retry',
    upload: 'Upload',
    preview: 'Preview',
    drag: 'Click or drag file to this area to upload',
    dragHover: 'Release to upload',
    error: 'Upload Error',
  },
  Typography: {
    copy: 'Copy',
    copied: 'Copied',
    edit: 'Edit',
    fold: 'Fold',
    unfold: 'Unfold',
  },
  Transfer: {
    resetText: 'Reset',
  },
  ImagePreview: {
    fullScreen: 'Full Screen',
    rotateRight: 'Rotate Right',
    rotateLeft: 'Rotate Left',
    zoomIn: 'Zoom In',
    zoomOut: 'Zoom Out',
    originalSize: 'Original Size',
  },
  Form: DefaultValidateMessage,
  ColorPicker: {
    history: 'History Colors',
    preset: 'Preset Colors',
    empty: 'Empty',
  },
};
