import axios from 'axios';

export const getGraphData = async (url: string, accesstoken: string) => {
    //accesstoken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyIsImtpZCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyJ9.eyJhdWQiOiJodHRwczovL3NhbHRyaWFsLmNybS5keW5hbWljcy5jb20iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9jZDc3YTA1My1hNTc0LTRkMTktOTcwYS05NzM0MDJjMGZkNjIvIiwiaWF0IjoxNjEyMjkxODM4LCJuYmYiOjE2MTIyOTE4MzgsImV4cCI6MTYxMjI5NTczOCwiYWNyIjoiMSIsImFpbyI6IkFVUUF1LzhUQUFBQXpLS25hNnVQNWRKUzZCTU1iNmphYzVObHNsNEtkN0lTQmx1WCszOWdMNjcvQ3NjbTBZN2QyVlVzOE5oQ21kVzBXRG9ST0xtaEVqSkVnTXJ2N0NnRWV3PT0iLCJhbXIiOlsicHdkIiwibWZhIl0sImFwcGlkIjoiZjgyODlmZDEtZjFkZi00YWVlLTgwMDctODBhMDU0MDg0M2Y2IiwiYXBwaWRhY3IiOiIwIiwiZmFtaWx5X25hbWUiOiJBbGxlZ3JhIiwiZ2l2ZW5fbmFtZSI6IlNhbCIsImlwYWRkciI6IjY4LjEwNC44My4xNzYiLCJuYW1lIjoiU2FsIEFsbGVncmEiLCJvaWQiOiI4NTg5NDM4Yy04YTdiLTQ1MzUtODc3NC02MWRlYmY2M2ZkZDQiLCJwdWlkIjoiMTAwMzIwMDEwNEM0OURDRSIsInJoIjoiMC5BQUFBVTZCM3pYU2xHVTJYQ3BjMEFzRDlZdEdmS1BqZjhlNUtnQWVBb0ZRSVFfWjNBTmcuIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic3ViIjoiSWNEekEtcnRhbng2OGcyNnZEa3FXVjctZlNPNGdfRm9YNW1KUzlpZ01xbyIsInRpZCI6ImNkNzdhMDUzLWE1NzQtNGQxOS05NzBhLTk3MzQwMmMwZmQ2MiIsInVuaXF1ZV9uYW1lIjoic2FsQHNhbG5ld3RyaWFsLm9ubWljcm9zb2Z0LmNvbSIsInVwbiI6InNhbEBzYWxuZXd0cmlhbC5vbm1pY3Jvc29mdC5jb20iLCJ1dGkiOiI4bTRvcGhHcDZrLXhQUVFDTWUwa0FBIiwidmVyIjoiMS4wIn0.Fp24MH1qPLQW-sf9cJwJTvmr85Vlq2Rum7jA3imJFgOBajusjGNmwNDR2-H0lZ0IpNLwSkXgDRRh9wg7zvSJpcta08R1RTn4Z5_e8qvKchrJCPX7eFdAWQ6-vxkbiP3P3MUkuwg34HZuj20_BlEyVlQAuKLK16XlTPYa5bjmHeFc2P0c0usee8ywu6oJV6woBoJVkspznBu5yn3tgbefMNmC5NochYXSzPF06AOsvvjbpYIaoRh3zoS420KdgQZIVK7ZL0pXXvw8ErmYHCezI8VBpqKOXXTskCOR4sJVBaBtnzTN9uaIyeUDdwUtlhmF5T3A_sir07ohIDTvrnO7_g'
    const response = await axios({
        url: url,
        method: 'get',
        headers: {'Authorization': `Bearer ${accesstoken}`,
        'OData-MaxVersion': '4.0',
        'OData-Version': '4.0',
        "Accept": "application/json",
        "Content-Type": "application/json; charset=utf-8",
        "Prefer": "odata.include-annotations = *"
       }
      });
    return response;
};
