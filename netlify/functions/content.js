// netlify/functions/content.js

const mainHTML = `
    <div id="main-content">
        <header class="bg-white shadow-md sticky top-0 z-50">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex items-center justify-end h-20">
                    <div class="hidden lg:block">
                        <nav class="flex items-center space-x-2">
                            <a href="#" data-section="inicio" class="nav-link text-gray-700 hover:bg-primary hover:text-white px-3 py-2 rounded-md text-sm font-medium transition">Início</a>
                            <a href="#" data-section="cursos" class="nav-link text-gray-700 hover:bg-primary hover:text-white px-3 py-2 rounded-md text-sm font-medium transition">Cursos</a>
                            <a href="#" data-section="scripts" class="nav-link text-gray-700 hover:bg-primary hover:text-white px-3 py-2 rounded-md text-sm font-medium transition">Scripts</a>
                            <a href="#" data-section="links" class="nav-link text-gray-700 hover:bg-primary hover:text-white px-3 py-2 rounded-md text-sm font-medium transition">Links Úteis</a>
                            <a href="#" data-section="padronizacao" class="nav-link text-gray-700 hover:bg-primary hover:text-white px-3 py-2 rounded-md text-sm font-medium transition">Padronização</a>
                            <a href="#" data-section="verificacoes" class="nav-link text-gray-700 hover:bg-primary hover:text-white px-3 py-2 rounded-md text-sm font-medium transition">Verificações</a>
                            <a href="#" data-section="roteadores" class="nav-link text-gray-700 hover:bg-primary hover:text-white px-3 py-2 rounded-md text-sm font-medium transition">Roteadores</a>
                            <a href="#" data-section="valores" class="nav-link text-gray-700 hover:bg-primary hover:text-white px-3 py-2 rounded-md text-sm font-medium transition">Valores</a>
                            <a href="#" data-section="enderecos" class="nav-link text-gray-700 hover:bg-primary hover:text-white px-3 py-2 rounded-md text-sm font-medium transition">Endereços</a>
                        </nav>
                    </div>
                    <div class="lg:hidden">
                        <select id="mobile-nav" class="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5">
                            <option value="inicio">Início</option>
                            <option value="cursos">Cursos Gratuitos</option>
                            <option value="scripts">Scripts</option>
                            <option value="links">Links Úteis</option>
                            <option value="padronizacao">Padronização</option>
                            <option value="verificacoes">Verificações Técnicas</option>
                            <option value="roteadores">Roteadores</option>
                            <option value="valores">Valores</option>
                            <option value="enderecos">Endereços</option>
                        </select>
                    </div>
                </div>
            </div>
            <nav class="bg-gray-800 text-white shadow-lg sticky top-20 z-40">
                <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex items-center justify-center h-12 space-x-6">
                        <a href="#" target="_blank" class="flex items-center hover:text-primary transition"><i class="fas fa-file-alt mr-2"></i><span>Scripts</span></a>
                        <a href="#" target="_blank" class="flex items-center hover:text-primary transition"><i class="fab fa-google-drive mr-2"></i><span>Drive (Arquivos)</span></a>
                        <a href="#" class="flex items-center hover:text-primary transition"><i class="fas fa-link mr-2"></i><span>Sistema de Atendimento</span></a>
                        <a href="#" target="_blank" class="flex items-center hover:text-primary transition"><i class="fas fa-tasks mr-2"></i><span>Sistema de Gestão</span></a>
                    </div>
                </div>
            </nav>
        </header>
        <main class="container mx-auto p-4 sm:p-6 lg:p-8">
            <div id="inicio" class="content-section">
                <div class="bg-white p-8 rounded-2xl shadow-lg mb-8">
                    <h1 class="text-3xl font-bold text-secondary mb-4">MANUAL DE ATENDIMENTO AO CLIENTE - EQUIPE DE SAC</h1>
                    <p class="text-gray-600 leading-relaxed">Este manual fornece diretrizes essenciais para o atendimento ao cliente pela equipe de SAC, abordando personalização, scripts, verificações técnicas e situações comuns.</p>
                </div>
                <div class="flex flex-col gap-8">
                    <div class="bg-white rounded-2xl shadow-lg p-6 text-center overflow-hidden">
                        <div class="w-full h-96 flex items-center justify-center"><img src="/objetivo.png" alt="Banner sobre o objetivo do manual" class="max-h-full max-w-full object-contain"></div>
                        <h3 class="mt-4 font-bold text-xl text-secondary">Objetivo do Manual</h3>
                    </div>
                    <div class="bg-white rounded-2xl shadow-lg p-6 text-center overflow-hidden">
                        <div class="w-full h-96 flex items-center justify-center"><img src="/diretrizes.png" alt="Banner sobre as diretrizes de interação" class="max-h-full max-w-full object-contain"></div>
                        <h3 class="mt-4 font-bold text-xl text-secondary">Diretrizes de Interação</h3>
                    </div>
                    <div class="bg-white rounded-2xl shadow-lg p-6 text-center overflow-hidden">
                        <div class="w-full h-96 flex items-center justify-center"><img src="/funil.png" alt="Banner sobre o funil de atendimento" class="max-h-full max-w-full object-contain"></div>
                        <h3 class="mt-4 font-bold text-xl text-secondary">Funil de Atendimento</h3>
                    </div>
                    <div class="bg-white rounded-2xl shadow-lg p-6 text-center overflow-hidden">
                        <div class="w-full h-96 flex items-center justify-center"><img src="/experiencia.png" alt="Banner sobre a experiência do cliente" class="max-h-full max-w-full object-contain"></div>
                        <h3 class="mt-4 font-bold text-xl text-secondary">Experiência do Cliente</h3>
                    </div>
                    <div class="bg-white rounded-2xl shadow-lg p-6 text-center overflow-hidden">
                        <div class="w-full h-96 flex items-center justify-center"><img src="/assistencia.png" alt="Banner sobre a confirmação de assistência" class="max-h-full max-w-full object-contain"></div>
                        <h3 class="mt-4 font-bold text-xl text-secondary">Confirmação de Assistência</h3>
                    </div>
                </div>
            </div>
            <div id="cursos" class="content-section" style="display:none;">
                <div class="bg-white p-8 rounded-2xl shadow-lg">
                    <h2 class="text-2xl font-bold text-secondary mb-6 border-l-4 border-primary pl-4">Plataformas de Cursos Gratuitos</h2>
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div class="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
                            <img src="/logo-nicbr.png" alt="Logo da NIC.BR" class="w-16 h-16 mx-auto mb-3 rounded-full object-contain">
                            <h4 class="font-semibold mb-2">NIC.BR</h4>
                            <a href="https://cursoseventos.nic.br/cursos/cursosonline/" target="_blank" class="text-primary hover:underline">Acessar</a>
                        </div>
                        <div class="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
                            <img src="/logo-lumina.png" alt="Logo da Lúmina UFRGS" class="w-16 h-16 mx-auto mb-3 rounded-full object-contain">
                            <h4 class="font-semibold mb-2">LÚMINA | UFRGS</h4>
                            <a href="https://lumina.ufrgs.br/" target="_blank" class="text-primary hover:underline">Acessar</a>
                        </div>
                        <div class="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
                            <img src="/logo-intelbras.png" alt="Logo da Intelbras" class="w-16 h-16 mx-auto mb-3 rounded-full object-contain">
                            <h4 class="font-semibold mb-2">INTELBRAS</h4>
                            <a href="https://cursos.intelbras.com.br/portal/layout/927/intelbras/home.asp?WorkspaceID=1265" target="_blank" class="text-primary hover:underline">Acessar</a>
                        </div>
                        <div class="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
                            <img src="/logo-ibm.jpg" alt="Logo da IBM SkillsBuild" class="w-16 h-16 mx-auto mb-3 rounded-full object-contain">
                            <h4 class="font-semibold mb-2">IBM SKILLSBUILD</h4>
                            <a href="https://sb-auth.skillsbuild.org/" target="_blank" class="text-primary hover:underline">Acessar</a>
                        </div>
                        <div class="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
                            <img src="/logo-kultivi.png" alt="Logo da Kultivi" class="w-16 h-16 mx-auto mb-3 rounded-full object-contain">
                            <h4 class="font-semibold mb-2">KULTIVI</h4>
                            <a href="https://app.kultivi.com/" target="_blank" class="text-primary hover:underline">Acessar</a>
                        </div>
                        <div class="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
                            <img src="/logo-microsoft.png" alt="Logo da Microsoft Learn" class="w-16 h-16 mx-auto mb-3 rounded-full object-contain">
                            <h4 class="font-semibold mb-2">MICROSOFT LEARN</h4>
                            <a href="https://learn.microsoft.com/pt-br/" target="_blank" class="text-primary hover:underline">Acessar</a>
                        </div>
                        <div class="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
                            <img src="/logo-fundacao.png" alt="Logo da Fundação Bradesco" class="w-16 h-16 mx-auto mb-3 rounded-full object-contain">
                            <h4 class="font-semibold mb-2">FUNDAÇÃO BRADESCO</h4>
                            <a href="https://www.ev.org.br/" target="_blank" class="text-primary hover:underline">Acessar</a>
                        </div>
                        <div class="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
                            <img src="/logo-escolavirtual.png" alt="Logo da Escola Virtual GOV" class="w-16 h-16 mx-auto mb-3 rounded-full object-contain">
                            <h4 class="font-semibold mb-2">ESCOLA VIRTUAL</h4>
                            <a href="https://www.escolavirtual.gov.br/catalogo" target="_blank" class="text-primary hover:underline">Acessar</a>
                        </div>
                    </div>
                </div>
            </div>
            <div id="scripts" class="content-section" style="display:none;"><div class="bg-white p-8 rounded-2xl shadow-lg"><h2 class="text-2xl font-bold text-secondary mb-6 border-l-4 border-primary pl-4">Scripts e Modelos de Resposta</h2><p class="text-gray-600 mb-4">O link abaixo possui o modelo de respostas, mas pode ser alterado conforme a necessidade.</p><div class="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded-r-lg mb-6" role="alert"><p class="font-bold">Atenção!</p><p>É necessário clicar em "Arquivo" e fazer uma cópia para começar a editar e utilizar. Após fazer a cópia, altere o nome: Clique em "Editar" → "Localizar e substituir" → Substitua "[Atendente]" pelo seu nome e clique em "Substituir tudo".</p></div><a href="#" target="_blank" class="inline-flex items-center bg-primary text-white font-bold py-2 px-4 rounded-lg hover:bg-opacity-90 transition">Acessar Scripts/Respostas (Manual)<svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg></a></div></div>
            <div id="links" class="content-section" style="display:none;"><div class="bg-white p-8 rounded-2xl shadow-lg"><h2 class="text-2xl font-bold text-secondary mb-6 border-l-4 border-primary pl-4">Links Úteis</h2><div class="space-y-8"><div><h3 class="text-xl font-semibold text-secondary mb-4">Sistemas Internos</h3><ul class="space-y-3"><li class="flex items-center">🔹<a href="#" target="_blank" class="ml-2 text-primary hover:underline">Sistema de Gestão</a></li><li class="flex items-center">🔹<a href="#" target="_blank" class="ml-2 text-primary hover:underline">Sistema de Atendimento</a></li><li class="flex items-center">🔹<a href="#" target="_blank" class="ml-2 text-primary hover:underline">Painel de Atendimento</a></li><li><p class="flex items-center">🔹<a href="#" target="_blank" class="ml-2 text-primary hover:underline">Painel de Monitoramento</a></p><p class="text-sm text-gray-500 ml-5">→ (Credenciais de acesso removidas)</p></li></ul></div><div><h3 class="text-xl font-semibold text-secondary mb-4">Plataformas e Serviços</h3><ul class="space-y-3"><li class="flex items-center">🔹<a href="#" target="_blank" class="ml-2 text-primary hover:underline">Tutorial de Acesso à Plataforma de Streaming</a></li><li><p class="flex items-center">🔹<a href="#" target="_blank" class="ml-2 text-primary hover:underline">Portal do Cliente</a></p><p class="text-sm text-gray-500 ml-5">→ (Credenciais de acesso removidas)</p></li><li class="flex items-center">🔹<a href="#" target="_blank" class="ml-2 text-primary hover:underline">Ativação de Serviços Adicionais</a></li><li class="flex items-center">🔹<a href="#" target="_blank" class="ml-2 text-primary hover:underline">Ativar Serviço de Música</a></li><li><p class="flex items-center">🔹<a href="#" target="_blank" class="ml-2 text-primary hover:underline">Plataforma de Streaming</a></p><p class="text-sm text-gray-500 ml-5">→ (Credenciais de acesso removidas)</p></li></ul></div><div><h3 class="text-xl font-semibold text-secondary mb-4">Ferramentas e Monitoramento</h3><ul class="space-y-3"><li class="flex items-center">🔹<a href="https://ntp.br/" target="_blank" class="ml-2 text-primary hover:underline">SNTP (Correção de Data/Hora de Equipamentos)</a></li><li class="flex items-center">🔹<a href="https://downdetector.com.br/" target="_blank" class="ml-2 text-primary hover:underline">DownDetector (Monitoramento de Serviços)</a></li><li class="flex items-center">🔹<a href="https://www.yougetsignal.com/tools/open-ports/" target="_blank" class="ml-2 text-primary hover:underline">Verificação de Abertura de Portas</a></li></ul></div></div></div></div>
            <div id="padronizacao" class="content-section" style="display:none;"><div class="bg-white p-8 rounded-2xl shadow-lg prose max-w-none"><h2 class="text-2xl font-bold text-secondary mb-6 border-l-4 border-primary pl-4">Padronização de Atendimento Via Ligação</h2><h3>Atendimento da Empresa</h3><p><strong>Atendente:</strong> Minha Empresa, (nome do atendente), bom dia/boa tarde/boa noite! Com quem eu falo? …Como posso te ajudar? <em>(Ouça atentamente a solicitação do cliente para planejar a melhor solução.)</em></p><h3>Identificação e Segurança</h3><p><strong>→ Atendente:</strong> Para darmos continuidade, poderia me informar o CPF ou CNPJ do titular da conta?</p><p><strong>→ Atendente:</strong> Por gentileza, me confirma o nome do titular, endereço e telefone. <em>(Explicação opcional para o cliente: "Essas informações são para sua segurança e para mantermos seu cadastro atualizado.")</em></p><h3>Registro e Verificação</h3><p><strong>Atendente:</strong> O número do protocolo deste atendimento é o (N° do protocolo). Irei me ausentar por um instante para realizar a verificação no sistema. Caso precise de algo nesse momento, estarei em linha, ok? <em>(Coloque o cliente no mudo para evitar ruídos e informações internas. Caso precise de mais tempo, avise: “Só mais um momento, por favor.” Evite ultrapassar 30 segundos sem dar retorno ao cliente.)</em></p><div class="bg-red-100 border-l-4 border-red-500 text-red-800 p-4 my-4 rounded-r-lg"><strong>OBS:</strong> Nunca reiniciar os equipamentos do cliente sem antes comunicá-lo com antecedência e pedir autorização.</div><h3>Diagnóstico e Resolução</h3><p><strong>Atendente:</strong> (Nome do cliente), obrigado por aguardar! Finalizei a verificação da sua conexão.</p><ul><li><strong>Se for lentidão:</strong> Poderia testar agora e me dizer se percebe melhora na navegação?</li><li><strong>Se estiver sem conexão:</strong> Consegue verificar se a conexão foi restabelecida?</li></ul><h3>Encerramento e Avaliação</h3><p><strong>Atendente:</strong> Perfeito! Fico feliz em ter ajudado. Você deseja anotar o protocolo para referência futura? <em>(Mesmo que o cliente não queira anotá-lo, ele deve ser informado e registrado na ligação.)</em></p><div class="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-4 my-4 rounded-r-lg"><strong>OBS:</strong> O protocolo deve ser preenchido completamente durante o atendimento e finalizado antes de encerrar a ligação. Em nenhuma hipótese deve ser registrado após a chamada.</div><p><strong>Atendente:</strong> Antes de encerrar, se puder, aguarde um instante ao final da ligação para avaliar meu atendimento. Isso é muito importante para nós! A Minha Empresa agradece seu contato. Tenha um(a) excelente dia/tarde/noite!</p><p><em>(Sempre finalize a chamada antes do cliente para garantir que ele receba a opção de avaliação.)</em></p></div></div>
            <div id="verificacoes" class="content-section" style="display:none;"><div class="bg-white p-8 rounded-2xl shadow-lg"><h2 class="text-2xl font-bold text-secondary mb-6 border-l-4 border-primary pl-4">Verificações Técnicas Básicas</h2><div class="bg-red-100 border-l-4 border-red-500 text-red-800 p-4 my-4 rounded-r-lg"><strong>IMPORTANTE:</strong> Sempre pedir a permissão do cliente e informá-lo que ao realizar as verificações, pode haver a queda da conexão.</div><div class="space-y-4 mb-8 prose max-w-none"><p>• Verificar <strong>"ONU/ONT SINAL"</strong> para validar o sinal de fibra (abaixo de –27 é aceitável).</p><p>• Verificar <strong>"ONU/ONT INFORMAÇÕES"</strong> para identificar alarmes:</p><ul class="list-disc list-inside ml-4 mt-2 space-y-2 text-gray-700"><li><strong>DyingGasp:</strong> Falha de energia, possível ONU/ONT desligada. Solicitar a verificação das tomadas, botões de POWER e fotos dos equipamentos, a fim de validar mal contato nas tomadas e luzes apagadas nos equipamentos.</li><li><strong>LOS:</strong> Danos na fibra em geral (rompimentos, mal contato nos conectores etc), na maioria das vezes resulta em visita técnica. Pode solicitar a verificação do conector da fibra.</li><li><strong>Offline:</strong> Cabo de rede, deu LOS e o cliente reiniciou o equipamento logo após. Verificações no cabo de rede e solicitar fotos dos equipamentos.</li><li><strong>SyncMib:</strong> Mal contato no conector da fibra ou resíduos como poeira, na maioria das vezes resulta em visita técnica.</li></ul></div><h3 class="text-xl font-semibold text-secondary mb-4">Situações Comuns e Como Lidar</h3><div class="space-y-2" id="accordion-container"><div class="border rounded-lg"><button class="accordion-button w-full flex justify-between items-center text-left p-4 bg-gray-50 hover:bg-gray-100 font-semibold">LENTIDÃO DE MANEIRA GERAL<i class="fas fa-chevron-down"></i></button><div class="accordion-content"><div class="p-4 border-t prose max-w-none"><ul><li>• Sempre verificar sinal de fibra.</li><li>• Sempre realizar a atualização da versão do roteador/ONT. (O link com os arquivos está em: <a href="#" target="_blank" class="text-primary hover:underline">Trabalho - Drive</a>)</li><li>• Caso seja ONU, verificar a versão do firmware (vertag com número final abaixo de 34 necessita de atualização).</li><li>• Verificar registro de quedas em "Extrato Autenticação" e o motivo (NAS-Request, User-Request, Lost-Carrier).</li></br><li>Configurações padrões no roteador/ONT:<ul></br><li><strong>• Canais 2.4G/5G:</strong> Automático.</li><li><strong>• Frequência 2.4G:</strong> 20MHz. | <strong>• Frequência 5G:</strong> 80MHz.</li><li><strong>• Firewall:</strong> Médio. | <strong>Protocolo:</strong> IPv4/IPv6.</li><li><strong>• UPNP:</strong> Ligado. | <strong>SGI:</strong> Ligado.</li><li><strong>• Isolamento de Rede:</strong> Desligado (quando F6600).</li><li><strong>• MTU:</strong> 1492. | <strong>DNS:</strong> Automático (192.168.93.19).</li><li><strong>• Correção do SNTP:</strong> 200.160.7.186 e 201.49.148.135.</li><li>• Reinicio do equipamento.</li></ul></li></ul></div></div></div><div class="border rounded-lg"><button class="accordion-button w-full flex justify-between items-center text-left p-4 bg-gray-50 hover:bg-gray-100 font-semibold">SEM CONEXÃO (COM IP E SINAL OK)<i class="fas fa-chevron-down"></i></button><div class="accordion-content"><div class="p-4 border-t prose max-w-none"><ul><li>• Realizar o reinício do equipamento.</li><li>• Conferir se o cliente está conectado corretamente.</li><li>• Conferir em "ONU/ONT INFORMAÇÕES" se está provisionado no PPPoE correto.</li><li>• Verificar se as redes estão ativas dentro do roteador.</li><li>• Em alguns casos (não apartamento), desprovisionar e provisionar a ONU.</li><li>• Verificar pontos adicionais/switches particulares que possam estar conflitando.</li></ul></div></div></div><div class="border rounded-lg"><button class="accordion-button w-full flex justify-between items-center text-left p-4 bg-gray-50 hover:bg-gray-100 font-semibold">SEM CONEXÃO (SEM IP, SINAL OK)<i class="fas fa-chevron-down"></i></button><div class="accordion-content"><div class="p-4 border-t prose max-w-none"><ul><li>• Verificar "Log Radius" para validar PPPoE e conflito de MAC.</li><li>• Possível mal contato no cabo de rede ou porta errada.</li><li>• Possível roteador desligado/queimado.</li><li>• Pedir para verificar cabos e fotos dos equipamentos.</li><li>• Em alguns casos (não apartamento), desprovisionar e provisionar a ONU/ONT.</li></ul></div></div></div><div class="border rounded-lg"><button class="accordion-button w-full flex justify-between items-center text-left p-4 bg-gray-50 hover:bg-gray-100 font-semibold">SEM CONEXÃO (SEM SINAL DE FIBRA)<i class="fas fa-chevron-down"></i></button><div class="accordion-content"><div class="p-4 border-t prose max-w-none"><ul><li>• Possível dano na fibra, conector ou ONU/ONT.</li><li>• Rodar "ONU/ONT INFORMAÇÕES" para identificar o motivo da queda.</li><li>• Rodar "SHOW ID/STATUS" para conferir se não é problema geral (informar N2).</li><li>• Solicitar fotos dos equipamentos.</li></ul></div></div></div><div class="border rounded-lg"><button class="accordion-button w-full flex justify-between items-center text-left p-4 bg-gray-50 hover:bg-gray-100 font-semibold">PROBLEMAS COM CÂMERAS, ALEXA OU ESPELHAMENTO<i class="fas fa-chevron-down"></i></button><div class="accordion-content"><div class="p-4 border-t prose max-w-none"><ul><li>• Conferir canais de rede.</li><li>• Verificar se SSID ou senha têm caracteres especiais.</li><li>• Desativar o Isolamento de Rede (F6600).</li><li>• Criar redes de teste com diferentes criptografias.</li></ul></div></div></div><div class="border rounded-lg"><button class="accordion-button w-full flex justify-between items-center text-left p-4 bg-gray-50 hover:bg-gray-100 font-semibold">TROCA DE SENHA WI-FI<i class="fas fa-chevron-down"></i></button><div class="accordion-content"><div class="p-4 border-t prose max-w-none"><p>A nova senha deve ter no mínimo 8 caracteres, com letra maiúscula, minúscula e número. Sem caracteres especiais.</p><ul></br><li><strong>Roteador:</strong> A troca é realizada dentro do próprio roteador.</li></br><li><strong>ONT (F6600, F680, F670L):</strong> A troca é feita na conexão PPPoE do cliente em "Conexões - Listagem". Após editar, executar "ONT WI-FI" nos scripts para aplicar a alteração.</li></ul></div></div></div></div></div></div>
            <div id="roteadores" class="content-section" style="display:none;"><div class="bg-white p-8 rounded-2xl shadow-lg"><h2 class="text-2xl font-bold text-secondary mb-6 border-l-4 border-primary pl-4">Roteadores e Capacidade de MB</h2><div class="overflow-x-auto"><table class="w-full text-left table-auto"><thead class="bg-gray-100"><tr><th class="px-4 py-2 font-semibold">Modelo</th><th class="px-4 py-2 font-semibold">Capacidade</th></tr></thead><tbody class="divide-y"><tr><td class="px-4 py-2">TENDA N301P SEM FIO</td><td class="px-4 py-2">ATÉ 50MB</td></tr><tr><td class="px-4 py-2">TPLINK 840N</td><td class="px-4 py-2">ATÉ 50MB</td></tr><tr><td class="px-4 py-2">TPLINK 849N</td><td class="px-4 py-2">PLANOS INFERIORES A 50MB</td></tr><tr><td class="px-4 py-2">MULTILASER RE046</td><td class="px-4 py-2">PLANOS INFERIORES A 50MB</td></tr><tr><td class="px-4 py-2">INTELBRAS IWR1000N</td><td class="px-4 py-2">ATÉ 50MB</td></tr><tr><td class="px-4 py-2">INTELBRAS IWR3000N</td><td class="px-4 py-2">ATÉ 50MB</td></tr><tr><td class="px-4 py-2">MULTILASER PRO RE 172</td><td class="px-4 py-2">ATÉ 50MB</td></tr><tr><td class="px-4 py-2">TPLINK C20</td><td class="px-4 py-2">ATÉ 100MB</td></tr><tr><td class="px-4 py-2">TENDA AC8</td><td class="px-4 py-2">ATÉ 120MB</td></tr><tr><td class="px-4 py-2">ONT WIFI F670L</td><td class="px-4 py-2">ATÉ 300MB</td></tr><tr><td class="px-4 py-2">TPLINK EC230 1350MBPS</td><td class="px-4 py-2">ATÉ 300MB</td></tr><tr><td class="px-4 py-2">TPLINK C5</td><td class="px-4 py-2">ATÉ 300MB</td></tr><tr><td class="px-4 py-2">ZTE ZT199 SPACE</td><td class="px-4 py-2">ATÉ 300MB</td></tr><tr><td class="px-4 py-2">HUAWEI WS5200</td><td class="px-4 py-2">ATÉ 300MB</td></tr><tr><td class="px-4 py-2">ZTE H198A</td><td class="px-4 py-2">ATÉ 300MB</td></tr><tr><td class="px-4 py-2">MULTILASER PRO RE 708</td><td class="px-4 py-2">ATÉ 400MB</td></tr><tr><td class="px-4 py-2">TENDA AC10 MIMU</td><td class="px-4 py-2">ATÉ 500MB</td></tr><tr><td class="px-4 py-2">ONT WIFI F680 AC 2000 6 ANTENAS</td><td class="px-4 py-2">ATÉ 1000MB</td></tr><tr><td class="px-4 py-2">ZTE H199A</td><td class="px-4 py-2">ATÉ 1000MB</td></tr><tr><td class="px-4 py-2">ONT WIFI F6600</td><td class="px-4 py-2">ATÉ 1000MB</td></tr></tbody></table></div></div></div>
            <div id="valores" class="content-section" style="display:none;"><div class="space-y-8"><div class="bg-white p-8 rounded-2xl shadow-lg"><h2 class="text-2xl font-bold text-secondary mb-6 border-l-4 border-primary pl-4">Valores de Telefonia Fixa</h2><div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-center"><div class="border p-4 rounded-lg"><div class="w-full h-32 bg-white rounded-md mb-4 flex items-center justify-center overflow-hidden p-2"><img src="/TS2510.png" alt="Telefone Sem Fio TS 2510" class="w-full h-full object-contain"></div><h4 class="font-bold">Telefone Sem Fio TS 2510</h4><p>R$50,00 de TAXA DE ATIVAÇÃO + R$ 10,00 na MENSALIDADE</p></div><div class="border p-4 rounded-lg"><div class="w-full h-32 bg-white rounded-md mb-4 flex items-center justify-center overflow-hidden p-2"><img src="/PlenoPT.png" alt="Telefone Com Fio Pleno PT" class="w-full h-full object-contain"></div><h4 class="font-bold">Telefone Com Fio Pleno PT</h4><p>R$50,00 de TAXA DE ATIVAÇÃO + R$ 5,00 na MENSALIDADE</p></div><div class="border p-4 rounded-lg"><div class="w-full h-32 bg-white rounded-md mb-4 flex items-center justify-center overflow-hidden p-2"><img src="/125i.png" alt="Telefone IP TIP 125i" class="w-full h-full object-contain"></div><h4 class="font-bold">Telefone IP TIP 125i</h4><p>R$100,00 de TAXA DE ATIVAÇÃO + R$ 20,00 na MENSALIDADE</p></div></div></div><div class="bg-white p-8 rounded-2xl shadow-lg"><h2 class="text-2xl font-bold text-secondary mb-6 border-l-4 border-primary pl-4">Valores de Planos Móveis</h2><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"><div class="border p-4 rounded-lg text-center bg-gray-50"><h4 class="font-bold text-primary text-xl">1 GIGA</h4><p class="text-2xl font-bold my-2">R$29,90<span class="text-sm">/mês</span></p><p class="text-xs text-gray-600">eSIM, chip, portabilidade grátis, WhatsApp (para mensagens de texto) ilimitado.</p></div><div class="border p-4 rounded-lg text-center bg-gray-50"><h4 class="font-bold text-primary text-xl">3 GIGAS</h4><p class="text-2xl font-bold my-2">R$34,90<span class="text-sm">/mês</span></p><p class="text-xs text-gray-600">eSIM, chip, portabilidade grátis, WhatsApp (para mensagens de texto) ilimitado.</p></div><div class="border p-4 rounded-lg text-center bg-gray-50"><h4 class="font-bold text-primary text-xl">6 GIGAS</h4><p class="text-2xl font-bold my-2">R$44,90<span class="text-sm">/mês</span></p><p class="text-xs text-gray-600">eSIM, chip, portabilidade grátis, WhatsApp (para mensagens de texto) e Waze ilimitados.</p></div><div class="border p-4 rounded-lg text-center bg-gray-50"><h4 class="font-bold text-primary text-xl">10 GIGAS</h4><p class="text-2xl font-bold my-2">R$59,90<span class="text-sm">/mês</span></p><p class="text-xs text-gray-600">eSIM, chip, portabilidade grátis, WhatsApp (para mensagens de texto) e Waze ilimitados.</p></div><div class="border p-4 rounded-lg text-center bg-gray-50"><h4 class="font-bold text-primary text-xl">15 GIGAS</h4><p class="text-2xl font-bold my-2">R$74,90<span class="text-sm">/mês</span></p><p class="text-xs text-gray-600">eSIM, chip, portabilidade grátis, WhatsApp (para mensagens de texto) e Waze ilimitados.</p></div></div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-8"><div class="bg-white p-8 rounded-2xl shadow-lg"><h2 class="text-2xl font-bold text-secondary mb-6 border-l-4 border-primary pl-4">Valores de Serviços Adicionais</h2><ul class="list-disc list-inside space-y-2 text-gray-700"><li><strong>Serviço de Música:</strong> R$19,90/mês</li><li><strong>Streaming de Filmes/Séries:</strong> R$27,90/mês</li><li><strong>Serviço de Segurança:</strong> Taxa de adesão: R$100 + Mensalidade: R$29,90</li><li><strong>Fixo PF Avulso:</strong> R$29,90/mês</li><li><strong>Fixo PJ:</strong> R$59,90/mês</li><li><strong>Plataforma de Streaming:</strong> R$9,90/mês</li><li><strong>Plataforma de Streaming Plus:</strong> R$14,90/mês</li></ul></div><div class="bg-white p-8 rounded-2xl shadow-lg"><h2 class="text-2xl font-bold text-secondary mb-6 border-l-4 border-primary pl-4">Valor do Set-Top Box</h2><p class="text-gray-700"><strong>Valor:</strong> R$200,00</p><p class="text-gray-700"><strong>Opções de Pagamento:</strong></p><ul class="list-disc list-inside ml-4 space-y-1"><li>À vista: R$180,00</li><li>Parcelado: 5x de R$40,00 (Total: R$200,00)</li></ul><p class="mt-4 text-sm text-gray-500"><strong>Importante:</strong> O aparelho é fornecido em comodato e deve ser devolvido em caso de encerramento do contrato.</p></div></div></div></div>
            
            <div id="enderecos" class="content-section" style="display:none;">
                <div class="bg-white p-8 rounded-2xl shadow-lg">
                    <h2 class="text-2xl font-bold text-secondary mb-8 border-l-4 border-primary pl-4">Nossas Lojas</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                        
                        <div class="flex items-start space-x-4">
                            <i class="fas fa-map-marker-alt text-primary text-2xl mt-1"></i>
                            <div>
                                <h3 class="font-bold text-lg text-secondary">Cidade Exemplo A - Bairro Norte</h3>
                                <p class="text-gray-600 mt-1">Av. Principal, 123 - Bairro Norte, Cidade Exemplo A - XX, 12345-678</p>
                                <a href="#" target="_blank" class="text-primary hover:underline mt-2 inline-block font-semibold">Ver no mapa <i class="fas fa-external-link-alt text-xs ml-1"></i></a>
                            </div>
                        </div>
                        
                        <div class="flex items-start space-x-4">
                            <i class="fas fa-map-marker-alt text-primary text-2xl mt-1"></i>
                            <div>
                                <h3 class="font-bold text-lg text-secondary">Cidade Exemplo A - Bairro Sul</h3>
                                <p class="text-gray-600 mt-1">R. das Flores, 456 - Bairro Sul, Cidade Exemplo A - XX, 12345-000</p>
                                <a href="#" target="_blank" class="text-primary hover:underline mt-2 inline-block font-semibold">Ver no mapa <i class="fas fa-external-link-alt text-xs ml-1"></i></a>
                            </div>
                        </div>

                        <div class="flex items-start space-x-4">
                            <i class="fas fa-map-marker-alt text-primary text-2xl mt-1"></i>
                            <div>
                                <h3 class="font-bold text-lg text-secondary">Cidade Exemplo A - Shopping Central</h3>
                                <p class="text-gray-600 mt-1">Av. Comercial, 789 - Centro, Cidade Exemplo A - XX, 12345-111</p>
                                <a href="#" target="_blank" class="text-primary hover:underline mt-2 inline-block font-semibold">Ver no mapa <i class="fas fa-external-link-alt text-xs ml-1"></i></a>
                            </div>
                        </div>

                        <div class="flex items-start space-x-4">
                            <i class="fas fa-map-marker-alt text-primary text-2xl mt-1"></i>
                            <div>
                                <h3 class="font-bold text-lg text-secondary">Cidade Exemplo B - Centro</h3>
                                <p class="text-gray-600 mt-1">R. das Palmeiras, 321 - Loja 05 - Centro, Cidade Exemplo B - XX, 98765-432</p>
                                <a href="#" target="_blank" class="text-primary hover:underline mt-2 inline-block font-semibold">Ver no mapa <i class="fas fa-external-link-alt text-xs ml-1"></i></a>
                            </div>
                        </div>

                        <div class="flex items-start space-x-4">
                            <i class="fas fa-map-marker-alt text-primary text-2xl mt-1"></i>
                            <div>
                                <h3 class="font-bold text-lg text-secondary">Cidade Exemplo B - Bairro Leste</h3>
                                <p class="text-gray-600 mt-1">Av. dos Bandeirantes, 1000 - Bairro Leste, Cidade Exemplo B - XX, 98765-000</p>
                                <a href="#" target="_blank" class="text-primary hover:underline mt-2 inline-block font-semibold">Ver no mapa <i class="fas fa-external-link-alt text-xs ml-1"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    </div>
`;

exports.handler = async function(event, context) {
  // Esta função simplesmente retorna o conteúdo HTML principal.
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "text/html",
    },
    body: mainHTML,
  };
};