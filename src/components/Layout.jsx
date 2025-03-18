import React, { useState } from 'react';
import Sidebar from './Sidebar'; // Import Sidebar
import MainContent from './MainContent'; // Import MainContent
import { Box } from '@mui/material';

const Layout = () => {
    const [collapsed, setCollapsed] = useState(false); 
    const [resetChat, setResetChat] = useState(false);

    const toggleSidebar = () => {
        setCollapsed(!collapsed); 
    };

    const handleNewChat = () => {
        setResetChat(true);  // Trigger reset
        setTimeout(() => setResetChat(false), 100);  // Reset state after effect
    };

    return (
        <Box sx={{ display: 'flex', width: '100%' }}>
            {/* Sidebar */}
            <Sidebar collapsed={collapsed} toggleSidebar={toggleSidebar} onNewChat={handleNewChat} />

            {/* Main Content - Adjusting margin based on sidebar width */}
            <Box
                sx={{
                    flexGrow: 1, // Allow content to take the remaining space
                    transition: 'margin-left 0.3s ease', // Smooth transition
                    width: '100%',
                }}
            >
                <MainContent collapsed={collapsed} toggleSidebar={toggleSidebar} resetChat={resetChat}  />
            </Box>
        </Box>
    );
};

export default Layout;
