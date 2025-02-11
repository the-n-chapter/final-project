# Data Structure

## Data Format
The dataset is stored in an **Excel (.xlsx) file** and converted to JSON using `xlsx.js`.

## Attributes
Each record contains:
- `year` (number) - The year of the award
- `field` (string) - The research field
- `work` (string) - Description of the awarded work
- `author` (string) - Name(s) of the recipient(s)

## Fetching Process
- The file is located at `/public/data.xlsx`.
- Data is loaded using `fetch()` and parsed with `xlsx.read()`.
- The `useWinners()` hook stores the dataset in state for easy access.
- Filtering and sorting functionalities are implemented dynamically.

