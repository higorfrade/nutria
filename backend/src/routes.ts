import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CreateNutritionController } from "./controllers/CreateNutritionController";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {

    fastify.get("/test", (req: FastifyRequest, reply: FastifyReply) => {
        
        let responseText = "```json\n{\n  \"nome\": \"Higor\",\n  \"sexo\": \"masculino\",\n  \"idade\": 23,\n  \"altura\": 1.73,\n  \"peso\": 76,\n  \"objetivo\": \"Hipertrofia\",\n  \"refeicoes\": [\n    {\n      \"horario\": \"07:00\",\n      \"nome\": \"Cafe da Manha\",\n      \"alimentos\": [\n        \"4 ovos inteiros (mexidos ou cozidos)\",\n        \"100g de aveia em flocos (cozida com agua ou leite desnatado)\",\n        \"1 banana media\",\n        \"200ml de leite desnatado\"\n      ]\n    },\n    {\n      \"horario\": \"10:00\",\n      \"nome\": \"Lanche da Manha\",\n      \"alimentos\": [\n        \"150g de file de frango desfiado ou grelhado\",\n        \"2 fatias de pao integral\",\n        \"1 fruta media (ex: maca, pera)\"\n      ]\n    },\n    {\n      \"horario\": \"13:00\",\n      \"nome\": \"Almoco\",\n      \"alimentos\": [\n        \"180g de carne magra (patinho, file de frango, peixe branco)\",\n        \"200g de arroz branco ou integral cozido\",\n        \"1 concha grande de feijao\",\n        \"Salada variada a vontade (alface, tomate, pepino, cenoura)\",\n        \"1 colher de sopa de azeite extra virgem na salada\"\n      ]\n    },\n    {\n      \"horario\": \"16:00\",\n      \"nome\": \"Lanche da Tarde (Pre-treino)\",\n      \"alimentos\": [\n        \"150g de batata doce cozida\",\n        \"100g de iogurte natural desnatado OU 30g de whey protein (se nao for usar pos-treino)\"\n      ]\n    },\n    {\n      \"horario\": \"19:00\",\n      \"nome\": \"Pos-treino\",\n      \"alimentos\": [\n        \"30g de Whey Protein (diluido em agua)\",\n        \"1 banana grande OU 30g de maltodextrina/dextrose\"\n      ]\n    },\n    {\n      \"horario\": \"21:00\",\n      \"nome\": \"Jantar\",\n      \"alimentos\": [\n        \"150g de file de salmao assado OU 200g de peito de frango grelhado\",\n        \"150g de batata doce, quinoa ou mandioca cozida\",\n        \"Vegetais cozidos a vontade (brocolis, couve-flor, espinafre)\"\n      ]\n    }\n  ],\n  \"suplementos\": [\n    \"Whey Protein: Para complementar a ingestao de proteinas e auxiliar na recuperacao muscular.\",\n    \"Creatina: Para aumentar forca, potencia e desempenho nos treinos, contribuindo para a hipertrofia.\",\n    \"Multivitaminico: Para garantir a ingestao adequada de vitaminas e minerais, essenciais para o metabolismo e recuperacao.\",\n    \"Omega 3: Para auxiliar na saude cardiovascular, reduzir inflamacoes e otimizar a recuperacao.\"\n  ]\n}\n```"

        try {
            let jsonString = responseText.replace(/```\w*\n/g, '').replace(/\n```/g, '').trim();

            let jsonObject = JSON.parse(jsonString);

            return reply.send({ data: jsonObject });

        } catch (error) {
            console.log(error);
        }

        reply.send({ ok: true });
    })

    fastify.post("/create", async (req: FastifyRequest, reply: FastifyReply) => {
        return new CreateNutritionController().handle(req, reply);
    })
}