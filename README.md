# Movemedical - Simple Appointment App

Quick React web app you get from running

```
npx create-react-app movemedical-app
```

in the command line. Added `gh-pages` package to be able to create GitHub page.

This README contains “Requirements”, “Assumptions”, and “Bugs”

## Requirements

The main task is the following:

Create a basic React web app that allows the user to schedule appointments. No external libraries should be used. The scheduler should be able to do the following:

- Create appointments with a date, time, location, and description.
  - (A) Location should be a dropdown/select with the following options: San Diego, Portland, Seattle, London, and Orlando.
- See a list of my appointments
- Edit my appointments
- Cancel (delete) an appointment
- The user interface should be simple yet elegant (i.e., has some quick, light styling)
- Generate a Github page where this scheduler can be used, and submit the Github page link along with the link to the Github repo.

I acquired more requirements after asking some questions in an email and made everything into a list:

**Derived List of Requirements**

- Description
  - Validations for a reasonable length
- Date
  - No past appointments can be added
- Time
  - Dropdown
  - Adjustable to the minute
- Location
  - Dropdown
  - ONLY - San Diego, Portland, Seattle, London, and Orlando
  - Does NOT need state/country added on
- Other
  - See list of appointments
  - Edit appointments
  - All fields are editable
  - Create appointments
  - **All** fields are required
  - Design for web only
  - Volatile storage is OK (data resets on page reload)
  - Cancel/Delete appointments
  - Prompt on Delete action
  - Quick light styling

## Assumptions

I made the following assumptions creating this app:

- The list of appointments is sorted in order of soonest date
- Limited description to 256 characters (average characters in 4-5 sentences)
- All features available on one page
- Display a message if there are no appointments

## Bugs

There was a bug I could not get to during the time allotted.

The `datetime input` validation check uses the UTC time in ISO form. If you enter a datetime before the current datetime, the tooltip displays the correct date and time, it is just in UTC format so it appears like the time is a few hours ahead of the time that component was rendered.

I believe a solution to it would be to look into editing the validation check value some how. If that is not possible, then creating a tooltip about that input and doing a manual validation check and displaying that tooltip accordingly.
