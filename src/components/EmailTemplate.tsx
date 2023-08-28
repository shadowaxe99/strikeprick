import React from 'react';

interface EmailTemplateProps {
  subject: string;
  body: string;
}

const EmailTemplate: React.FC<EmailTemplateProps> = ({ subject, body }) => {
  return (
    <div>
      <h2>{subject}</h2>
      <p>{body}</p>
    </div>
  );
};

export default EmailTemplate;