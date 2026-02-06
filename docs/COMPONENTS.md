# Components

## Component library overview
Reusable UI components live in `src/ui/`. Feature-level reusable components live under `src/features/` and are shared across multiple views. All components are styled with `styled-components`.

Source: `src/ui/*`, `src/features/*`

---

## UI components (`src/ui`)

### AppLayout
**Purpose:** App shell with sidebar + header and an `<Outlet />` for routed content.

**Props:** None (uses children via routing).

**Example:**
```jsx
<Route element={<AppLayout />}>
  <Route path="dashboard" element={<Dashboard />} />
</Route>
```

**Edge cases:** Layout assumes a full-height viewport (`height: 100vh`).

Source: `src/ui/AppLayout.jsx`, `src/App.jsx`

### Button
**Purpose:** Themed button with size + variation styling.

**Props**
| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `variation` | `"primary" | "secondary" | "danger"` | `"primary"` | Visual style. |
| `size` | `"small" | "medium" | "large"` | `"medium"` | Padding/font-size scale. |
| `...buttonProps` | Button props | — | Passed to the underlying `<button>`. |

**Example:**
```jsx
<Button variation="secondary" size="small">Cancel</Button>
```

**Edge cases:** Variations and sizes are only defined for the listed values; other values result in no styling. 

Source: `src/ui/Button.jsx`

### ButtonGroup
**Purpose:** Horizontal grouping for buttons.

**Props:** Accepts `children` only.

**Example:**
```jsx
<ButtonGroup>
  <Button variation="secondary">Back</Button>
  <Button>Save</Button>
</ButtonGroup>
```

**Edge cases:** None.

Source: `src/ui/ButtonGroup.jsx`

### ButtonIcon
**Purpose:** Icon-only button with hover styles.

**Props:** Standard `<button>` props.

**Example:**
```jsx
<ButtonIcon><HiXMark /></ButtonIcon>
```

**Edge cases:** Expects child SVG icon for styling.

Source: `src/ui/ButtonIcon.jsx`

### ButtonText
**Purpose:** Text-only button used for inline actions.

**Props:** Standard `<button>` props.

**Example:**
```jsx
<ButtonText onClick={moveBack}>&larr; Back</ButtonText>
```

**Edge cases:** None.

Source: `src/ui/ButtonText.jsx`, `src/features/bookings/BookingDetail.jsx`

### Checkbox
**Purpose:** Checkbox with label styling.

**Props**
| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `checked` | `boolean` | — | Checked state. |
| `onChange` | `(event) => void` | — | Change handler. |
| `disabled` | `boolean` | `false` | Disable input. |
| `id` | `string` | — | Used for label binding. |
| `children` | `ReactNode` | — | Label content. |

**Example:**
```jsx
<Checkbox id="hasBreakfast" checked={value} onChange={onToggle}>
  Include breakfast
</Checkbox>
```

**Edge cases:** If `disabled` is `true`, label `htmlFor` is blank, so clicking label won’t toggle. 

Source: `src/ui/Checkbox.jsx`

### ConfirmDelete
**Purpose:** Confirmation dialog content for deletions.

**Props**
| Prop | Type | Description |
| --- | --- | --- |
| `resourceName` | `string` | Resource name to display. |
| `onConfirm` | `() => void` | Handler for delete action. |
| `disabled` | `boolean` | Disable buttons. |
| `onCloseModal` | `() => void` | Optional close handler (used by `Modal`). |

**Example:**
```jsx
<ConfirmDelete
  resourceName={name}
  onConfirm={handleDelete}
  disabled={isWorking}
/>
```

**Edge cases:** If `onCloseModal` is not supplied, the Cancel button won’t close a modal. 

Source: `src/ui/ConfirmDelete.jsx`, `src/features/cabins/CabinRow.jsx`

### DataItem
**Purpose:** Labeled data row with optional icon.

**Props**
| Prop | Type | Description |
| --- | --- | --- |
| `icon` | `ReactNode` | Icon displayed next to label. |
| `label` | `string` | Label text. |
| `children` | `ReactNode` | Value content. |

**Example:**
```jsx
<DataItem icon={<HiOutlineCheckCircle />} label="Breakfast included?">
  Yes
</DataItem>
```

**Edge cases:** None.

Source: `src/ui/DataItem.jsx`, `src/features/bookings/BookingDataBox.jsx`

### Empty
**Purpose:** Empty-state message.

**Props**
| Prop | Type | Description |
| --- | --- | --- |
| `resource` | `string` | Name of the resource for messaging. |

**Example:**
```jsx
<Empty resource="cabins" />
```

**Edge cases:** None.

Source: `src/ui/Empty.jsx`

### ErrorFallback (incomplete)
**Purpose:** Styled container for an error state.

**Status:** The file defines styled components but does **not** export a React component. Importing `ErrorFallback` will fail until an export is added.

Source: `src/ui/ErrorFallback.jsx`

### FileInput
**Purpose:** Styled `<input type="file" />`.

**Props:** Standard file input props.

**Example:**
```jsx
<FileInput id="image" accept="image/*" />
```

**Edge cases:** Relies on native file input behavior. 

Source: `src/ui/FileInput.jsx`

### Filter (incomplete)
**Purpose:** UI container and button styling for filter controls.

**Status:** The file defines styled components but does **not** export a React component; imports will fail until an export is added. Used by `BookingTableOperations` and `DashboardFilter`.

Source: `src/ui/Filter.jsx`, `src/features/bookings/BookingTableOperations.jsx`, `src/features/dashboard/DashboardFilter.jsx`

### Flag
**Purpose:** Styled `<img>` for country flags.

**Props:** Standard `<img>` props.

**Example:**
```jsx
<Flag src={countryFlag} alt={`Flag of ${country}`} />
```

**Edge cases:** Uses a named export: `import { Flag } from "../ui/Flag"`.

Source: `src/ui/Flag.jsx`, `src/features/bookings/BookingDataBox.jsx`

### Form
**Purpose:** Styled form container with `regular` or `modal` layouts.

**Props**
| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `type` | `"regular" | "modal"` | `"regular"` | Applies different layout styles. |
| `...formProps` | Form props | — | Passed to `<form>`. |

**Example:**
```jsx
<Form onSubmit={handleSubmit} type="modal">...</Form>
```

**Edge cases:** `modal` type sets a fixed width (80rem).

Source: `src/ui/Form.jsx`, `src/features/cabins/CreateCabinForm.jsx`

### FormRow
**Purpose:** Labeled form row with optional error message.

**Props**
| Prop | Type | Description |
| --- | --- | --- |
| `label` | `string` | Row label (optional). |
| `error` | `string` | Error message (optional). |
| `children` | `ReactElement` | Form control element; its `id` is used by the label. |

**Example:**
```jsx
<FormRow label="Cabin name" error={errors?.name?.message}>
  <Input id="name" />
</FormRow>
```

**Edge cases:** If `children` has no `id`, the label `htmlFor` will be undefined.

Source: `src/ui/FormRow.jsx`, `src/features/cabins/CreateCabinForm.jsx`

### Header
**Purpose:** Top app header container.

**Props:** None.

**Example:**
```jsx
<Header />
```

**Edge cases:** Content is currently hard-coded to `HEADER`.

Source: `src/ui/Header.jsx`

### Heading
**Purpose:** Semantic heading with size variants controlled via the `as` prop.

**Props**
| Prop | Type | Description |
| --- | --- | --- |
| `as` | `"h1" | "h2" | "h3"` | Determines size styles. |

**Example:**
```jsx
<Heading as="h1">Dashboard</Heading>
```

**Edge cases:** Only h1/h2/h3 variants are styled.

Source: `src/ui/Heading.jsx`

### Input
**Purpose:** Styled `<input>` control.

**Props:** Standard `<input>` props.

**Example:**
```jsx
<Input type="email" id="email" />
```

**Edge cases:** None.

Source: `src/ui/Input.jsx`

### Logo
**Purpose:** Displays the brand logo image.

**Props:** None.

**Example:**
```jsx
<Logo />
```

**Edge cases:** Uses a fixed `/logo-light.png` asset.

Source: `src/ui/Logo.jsx`

### MainNav
**Purpose:** Sidebar navigation with links to main routes.

**Props:** None.

**Example:**
```jsx
<MainNav />
```

**Edge cases:** Links are hard-coded to `/dashboard`, `/bookings`, `/cabins`, `/users`, `/settings`.

Source: `src/ui/MainNav.jsx`

### Menus (compound component)
**Purpose:** Context-based menus with toggle and portalized list.

**Subcomponents:** `Menus.Menu`, `Menus.Toggle`, `Menus.List`, `Menus.Button`

**Props**
| Component | Key Props | Description |
| --- | --- | --- |
| `Menus` | `children` | Context provider. |
| `Menus.Toggle` | `id` | Menu identifier. |
| `Menus.List` | `id` | Renders if `id` matches open menu. |
| `Menus.Button` | `icon`, `onClick` | Menu action button. |

**Example:**
```jsx
<Menus>
  <Menus.Menu>
    <Menus.Toggle id={cabinId} />
    <Menus.List id={cabinId}>
      <Menus.Button icon={<HiPencil />} onClick={onEdit}>Edit</Menus.Button>
    </Menus.List>
  </Menus.Menu>
</Menus>
```

**Edge cases:** Uses `useOutsideClick` to close when clicking outside; needs a DOM environment (uses `document.body`).

Source: `src/ui/Menus.jsx`, `src/features/cabins/CabinRow.jsx`, `src/hooks/useOutsideClick.js`

### Modal (compound component)
**Purpose:** Portal-based modal with open/close via context.

**Subcomponents:** `Modal.Open`, `Modal.Window`

**Props**
| Component | Key Props | Description |
| --- | --- | --- |
| `Modal` | `children` | Context provider. |
| `Modal.Open` | `opens` | Window name to open. |
| `Modal.Window` | `name` | Window name this instance renders. |

**Example:**
```jsx
<Modal>
  <Modal.Open opens="cabin-form">
    <Button>Add new cabin</Button>
  </Modal.Open>
  <Modal.Window name="cabin-form">
    <CreateCabinForm />
  </Modal.Window>
</Modal>
```

**Edge cases:** Children in `Modal.Window` are cloned with `onCloseModal` prop.

Source: `src/ui/Modal.jsx`, `src/features/cabins/AddCabin.jsx`

### Modal-v1
**Purpose:** Simpler modal component (single open state) that renders children in an overlay.

**Props**
| Prop | Type | Description |
| --- | --- | --- |
| `onClose` | `() => void` | Close handler. |
| `children` | `ReactNode` | Modal content. |

**Example:**
```jsx
<Modal onClose={toggleModal}>
  <CreateCabinForm />
</Modal>
```

**Edge cases:** Not used in current code (kept as an alternative implementation). 

Source: `src/ui/Modal-v1.jsx`

### Pagination (incomplete)
**Purpose:** Styled pagination layout and buttons.

**Status:** Only styled components exist; no exported component. 

Source: `src/ui/Pagination.jsx`

### Row
**Purpose:** Flexible row container with `horizontal`/`vertical` layout styles.

**Props**
| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `type` | `"vertical" | "horizontal"` | `"vertical"` | Layout orientation. |

**Example:**
```jsx
<Row type="horizontal">
  <Heading as="h1">All cabins</Heading>
  <p>Filter/Sort</p>
</Row>
```

**Edge cases:** Defaults to vertical stacking.

Source: `src/ui/Row.jsx`, `src/pages/Cabins.jsx`

### Select (incomplete)
**Purpose:** Styled `<select>` element.

**Status:** Only styled component is defined; no export. 

Source: `src/ui/Select.jsx`

### Sidebar
**Purpose:** Sidebar container with logo and main nav.

**Props:** None.

**Example:**
```jsx
<Sidebar />
```

**Edge cases:** None.

Source: `src/ui/Sidebar.jsx`

### Spinner
**Purpose:** Large loading spinner.

**Props:** None (styled div).

**Example:**
```jsx
{isPending ? <Spinner /> : <CabinTable />}
```

**Edge cases:** None.

Source: `src/ui/Spinner.jsx`, `src/features/cabins/CabinTable.jsx`

### SpinnerMini
**Purpose:** Small loading spinner based on an icon.

**Props:** None.

**Example:**
```jsx
<Button disabled={isUpdating}><SpinnerMini /></Button>
```

**Edge cases:** None (not used in code). 

Source: `src/ui/SpinnerMini.jsx`

### Table (compound component)
**Purpose:** Table layout with header, body, row, and footer.

**Subcomponents:** `Table.Header`, `Table.Body`, `Table.Row`, `Table.Footer`

**Props**
| Component | Key Props | Description |
| --- | --- | --- |
| `Table` | `columns` | CSS grid template columns. |
| `Table.Header` | `children` | Header cells. |
| `Table.Body` | `data`, `render` | Renders rows; shows empty state when `data` is empty. |
| `Table.Row` | `children` | Row cells. |
| `Table.Footer` | `children` | Footer content (hidden if empty). |

**Example:**
```jsx
<Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
  <Table.Header>...</Table.Header>
  <Table.Body data={cabins} render={(cabin) => <CabinRow cabin={cabin} />} />
</Table>
```

**Edge cases:** `Table.Body` returns a default empty-state message when `data.length` is 0.

Source: `src/ui/Table.jsx`, `src/features/cabins/CabinTable.jsx`

### TableOperations
**Purpose:** Container for filter/sort controls.

**Props:** `children` only.

**Example:**
```jsx
<TableOperations>
  <Filter ... />
  <SortBy ... />
</TableOperations>
```

**Edge cases:** Requires `Filter`/`SortBy` components to exist (see Troubleshooting).

Source: `src/ui/TableOperations.jsx`, `src/features/bookings/BookingTableOperations.jsx`

### Tag
**Purpose:** Status tag with dynamic color based on `type`.

**Props**
| Prop | Type | Description |
| --- | --- | --- |
| `type` | `string` | Maps to CSS variables like `--color-green-700`. |

**Example:**
```jsx
<Tag type="green">checked-in</Tag>
```

**Edge cases:** `type` must correspond to defined CSS color tokens (e.g., `green`, `blue`, `silver`).

Source: `src/ui/Tag.jsx`, `src/features/bookings/BookingRow.jsx`, `src/styles/GlobalStyles.js`

### Textarea
**Purpose:** Styled `<textarea>` input.

**Props:** Standard `<textarea>` props.

**Example:**
```jsx
<Textarea id="description" defaultValue="" />
```

**Edge cases:** Fixed height (8rem).

Source: `src/ui/Textarea.jsx`, `src/features/cabins/CreateCabinForm.jsx`

---

## Feature-level reusable components

### BookingDataBox
**Purpose:** Presentational component to display booking details (dates, guest info, pricing).

**Props**
| Prop | Type | Description |
| --- | --- | --- |
| `booking` | `object` | Booking object with nested `guests` and `cabins` fields. |

**Example:**
```jsx
<BookingDataBox booking={booking} />
```

**Edge cases:** Expects nested `guests` and `cabins` properties; will throw if `booking` is empty or missing these fields.

Source: `src/features/bookings/BookingDataBox.jsx`, `src/features/bookings/BookingDetail.jsx`, `src/features/check-in-out/CheckinBooking.jsx`

### DashboardBox
**Purpose:** Generic dashboard card container used by dashboard charts.

**Props:** None (styled div).

**Example:**
```jsx
const StyledSalesChart = styled(DashboardBox)`...`;
```

**Edge cases:** None.

Source: `src/features/dashboard/DashboardBox.jsx`, `src/features/dashboard/SalesChart.jsx`
