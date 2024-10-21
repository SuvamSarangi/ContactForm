Contact Us Form
================


Overview:-
========

This is a simple Contact Us form that allows users to fill out their name, email, and message. Once submitted, the form validates the information, and if everything is correct, it displays a success message. The form is responsive, meaning it will adjust to different screen sizes for both desktop and mobile devices.

Functionality:-
=============
Form Fields: The form has three input fields:

Name: The user enters their name.
Email: The user enters their email address.
Message: The user writes a message.

        Validation:-
        ===========
        All fields are required.
        The email address is checked against a simple pattern to ensure it's valid.
        Success Message: After the user submits the form and the data is valid, a success message appears on the screen saying, "Message sent successfully!"

        Console Logging: The form also logs the entered data (name, email, and message) to the browser console for easy debugging or review.

        Responsive Design: The layout adjusts to different screen sizes. On smaller screens (like mobile), the form and the contact information stack vertically to improve readability.


How It Works:-
=============

The user fills in their name, email, and message in the form fields.
When the user clicks the "Send Message" button, the form checks if all fields are filled.
If the form is filled correctly:
The form displays a success message.
The entered information is printed to the browser console.
The form resets, clearing all input fields.
If any field is empty or the email is invalid, the form shows an alert, asking the user to fix the issue.

Contact Information:-
===================

In addition to the form, there is also a section that displays the company's contact details:

Address: NH-55 Street, Dhenkanal, Odisha
Phone Number: 7008519377
Email: subhamsarangi23@gmail.com (this is clickable, so it will open your email client).

Technology Stack:-
================
HTML (index.html): Contains the structure of the form and the contact information.
CSS (style.css): Provides styling for the form and makes it responsive.
JavaScript (script.js): Contains the form validation logic and success message functionality.
