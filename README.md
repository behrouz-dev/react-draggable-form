# React Draggable Form

This project is a customizable form builder application built using React.js and Vite. It features drag-and-drop functionality, local state management with Zustand, and a responsive user interface.

## Project Structure

```
my-react-form-builder
├── public
│   └── index.html            # Main HTML file for the application
├── src
│   ├── components
│   │   ├── Canvas.tsx        # Main area for dragging and dropping form elements
│   │   ├── FormElement.tsx    # Renders individual form elements
│   │   ├── Sidebar.tsx       # Displays available form elements for dragging
│   │   ├── FormElements
│   │   │   ├── InputBox.tsx  # Renders an input field with validation
│   │   │   ├── CheckboxGroup.tsx # Renders a group of checkboxes
│   │   │   └── SelectBox.tsx # Renders a select dropdown
|   |   |   └── RangeSlider.tsx # Renders a range slider
│   ├── hooks
│   │   └── useStore.ts       # Zustand store for managing form elements state
│   ├── layouts
│   │   └── DashboardLayout.tsx # Structures the dashboard layout
│   ├── pages
│   │   ├── Login.tsx          # Login page of the application
│   │   └── Dashboard.tsx      # Main dashboard interface
│   ├── App.tsx               # Main application component
│   ├── main.tsx              # Entry point of the application
│   ├── index.css             # Global styles for the application
│   └── vite-env.d.ts         # TypeScript definitions for Vite
├── package.json               # npm configuration file
├── tsconfig.json              # TypeScript configuration file
├── vite.config.ts             # Vite configuration file
└── README.md                  # Project documentation
```

## Features

- **Customizable Form Builder**: Users can drag and drop various form elements onto a canvas to create custom forms.
- **Local State Management**: Zustand is used for managing the state of form elements, allowing for easy addition, removal, and updates.
- **Responsive UI**: The application is designed to be visually appealing and responsive across different devices.

## Getting Started

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd react-draggable-form
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm run dev
   ```

5. Open your browser and go to `http://localhost:3000` to see the application in action.

6. Login Guide:

   - For logging into the project, you can use any username and password. The login is a dummy authentication and does not validate credentials.

## Usage
   1. **Login**: Start by logging in with your credentials.
   2. **Dashboard**: After logging in, you will be redirected to the dashboard.
   3. **Drag and Drop**: Use the sidebar to drag and drop form elements onto the canvas.
   4. **Customize Elements**: Customize the form elements as needed.
   5. **Download JSON**: Click the "Download JSON" button to download the form data as a JSON file.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features you'd like to add.
