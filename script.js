let jobs = [
    { id: 1, companyName: "Nexus Digital", position: "Frontend Intern", location: "Remote", type: "Full-time", salary: "$40k", description: "Learn React and Tailwind in a fast-paced environment.", status: "all" },
    { id: 2, companyName: "Sky Force BD", position: "Logistics Agent", location: "Dhaka", type: "Full-time", salary: "৳55k", description: "Manage China to BD shipping operations.", status: "all" },
    { id: 3, companyName: "Cyberdyne", position: "AI Researcher", location: "CA, USA", type: "Contract", salary: "$120k", description: "Working on neural network scaling.", status: "all" },
    { id: 4, companyName: "GreenVibe", position: "UI/UX Designer", location: "Remote", type: "Part-time", salary: "$30/hr", description: "Design mobile apps for solar energy projects.", status: "all" },
    { id: 5, companyName: "Study-Concepta", position: "Lead Developer", location: "Dhaka", type: "Full-time", salary: "৳90k", description: "Overseeing the research paper hub development.", status: "all" },
    { id: 6, companyName: "InnoTech", position: "QA Engineer", location: "Remote", type: "Full-time", salary: "$50k", description: "Automated testing for web applications.", status: "all" },
    { id: 7, companyName: "FastCode", position: "Backend Dev", location: "Berlin", type: "Full-time", salary: "€60k", description: "Node.js and PostgreSQL database management.", status: "all" },
    { id: 8, companyName: "BioTech", position: "Data Scientist", location: "Remote", type: "Contract", salary: "$80/hr", description: "Analyzing genetic data for research.", status: "all" }
];

let currentTab = 'all';

function render() {
    const container = document.getElementById('job-container');
    const emptyState = document.getElementById('empty-state');
    
    const filteredJobs = currentTab === 'all' 
        ? jobs 
        : jobs.filter(job => job.status === currentTab);

    document.getElementById('tab-job-count').innerText = filteredJobs.length;

    if (filteredJobs.length === 0) {
        container.innerHTML = "";
        emptyState.classList.remove('hidden');
        emptyState.classList.add('flex');
    } else {
        emptyState.classList.add('hidden');
        emptyState.classList.remove('flex');

        container.innerHTML = filteredJobs.map(job => `
            <div class="card bg-white border border-base-200 p-5 flex flex-col justify-between h-full">
                <div>
                    <div class="flex justify-between items-start mb-4">
                        <span class="text-[10px] font-bold text-primary tracking-widest uppercase">${job.companyName}</span>
                        <button onclick="deleteJob(${job.id})" class="text-gray-300 hover:text-error transition-colors">
                            <i data-lucide="x-circle" class="w-5 h-5"></i>
                        </button>
                    </div>
                    <h3 class="text-lg font-bold text-neutral leading-tight mb-2">${job.position}</h3>
                    <div class="flex flex-wrap gap-2 mb-4">
                        <span class="badge badge-sm badge-ghost text-[10px]">${job.location}</span>
                        <span class="badge badge-sm badge-outline text-[10px]">${job.type}</span>
                    </div>
                    <p class="text-sm font-semibold text-success mb-2">${job.salary}</p>
                    <p class="text-xs text-gray-500 line-clamp-2 mb-6">${job.description}</p>
                </div>
                
                <div class="flex gap-2">
                    <button onclick="updateStatus(${job.id}, 'interview')" 
                        class="btn btn-sm flex-1 ${job.status === 'interview' ? 'btn-success' : 'btn-outline btn-success'}">
                        Interview
                    </button>
                    <button onclick="updateStatus(${job.id}, 'rejected')" 
                        class="btn btn-sm flex-1 ${job.status === 'rejected' ? 'btn-error' : 'btn-outline btn-error'}">
                        Rejected
                    </button>
                </div>
            </div>
        `).join('');
    }
    
    lucide.createIcons();
    updateDashboardStats();
}

function updateStatus(id, newStatus) {
    const job = jobs.find(j => j.id === id);
    job.status = (job.status === newStatus) ? 'all' : newStatus;
    render();
}

function deleteJob(id) {
    jobs = jobs.filter(j => j.id !== id);
    render();
}

function switchTab(tab, element) {
    currentTab = tab;
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('tab-active'));
    element.classList.add('tab-active');
    render();
}

function updateDashboardStats() {
    document.getElementById('total-count').innerText = jobs.length;
    document.getElementById('interview-count').innerText = jobs.filter(j => j.status === 'interview').length;
    document.getElementById('rejected-count').innerText = jobs.filter(j => j.status === 'rejected').length;
}

render();