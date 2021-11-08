$headers = New-Object "System.Collections.Generic.Dictionary[[String],[String]]"
$headers.Add("Authorization", "asdsad")
$headers.Add("Content-Type", "application/json")

$body = "{
`n    `"id`": `"1`",
`n    `"contact`": {
`n        `"name`": `"Ivan`",
`n        `"lastName`": `"Ivanov`",
`n        `"age`": `"24`"
`n    }
`n}"

$response = Invoke-RestMethod 'http://localhost:7002/api/contract' -Method 'GET' -Headers $headers
$response | ConvertTo-Json