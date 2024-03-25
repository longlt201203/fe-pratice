import AdminMainLayout from "../components/AdminMainLayout";
import Button from "../components/Button";

function TestAdminPage() {
    return (
        <AdminMainLayout title="This is title">
            <p>This is content</p>
            <Button variant="primary">Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="secondary" disabled>Disabled Button</Button>
        </AdminMainLayout>
    );    
}

export default TestAdminPage;