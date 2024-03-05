import * as React from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Box, DialogTitle, List, ListItem, ListItemButton, ListItemText } from '@mui/material';

export interface SimpleDialogProps {
    onClose: (value: string[]) => void;
    emails: string[]
}

const style = {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    // width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function BasicModal(props: Readonly<SimpleDialogProps>) {
    const [open, setOpen] = React.useState(false);
    const [selectedEmails, setSelectedEmails] = React.useState<string[]>([])

    const handleOpen = () => setOpen(true)

    const handleListItemClick = (value: string) => {
        setSelectedEmails([...selectedEmails, value])
    };

    function handleClose() {
        setOpen(false);
        props.onClose(selectedEmails)
        setSelectedEmails([])
    }

    function getOneItem(email: any) {
        return <ListItemButton onClick={() => handleListItemClick(email)}>
            <ListItemText primary={email} />
        </ListItemButton>
    }

    function getList(emails: any[]) {
        return <>{emails.map((email) => (
            <ListItem disableGutters key={email}>
                {getOneItem(email)}
            </ListItem>
        ))}</>
    }

    return (
        <div>
            <Button onClick={handleOpen}>Open modal</Button>
            <Modal
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <DialogTitle>Селектирай ръка</DialogTitle>
                    <List sx={{ pt: 0 }}>
                        {getList(props.emails)}
                    </List>
                    <Button onClick={handleClose}>Ok</Button>
                </Box>
            </Modal>
        </div>
    );
}